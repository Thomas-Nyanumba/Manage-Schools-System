import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Role {
  id: string;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  newRole: Role = { id: '', name: '', description: '' };
  editingRole: Role | null = null;
  apiUrl = 'http://localhost:3001/roles'; // Adjust URL to match json-server route

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRoles();
  }

  // Fetch roles from db.json
  fetchRoles() {
    this.http.get<Role[]>(this.apiUrl).subscribe((data) => {
      this.roles = data;
    });
  }

  // Add a new role
  addRole() {
    if (!this.newRole.name.trim()) return;

    const newRoleWithId = { ...this.newRole, id: Date.now().toString() }; // Assign unique ID

    this.http.post<Role>(this.apiUrl, newRoleWithId).subscribe((role) => {
      this.roles.push(role);
      this.newRole = { id: '', name: '', description: '' }; // Reset input fields
    });
  }

  // Edit an existing role
  editRole(role: Role) {
    this.editingRole = { ...role }; // Clone role to avoid modifying directly
  }

  // Save updated role
  saveRole() {
    if (!this.editingRole) return;

    this.http.put<Role>(`${this.apiUrl}/${this.editingRole.id}`, this.editingRole).subscribe((updatedRole) => {
      const index = this.roles.findIndex((r) => r.id === updatedRole.id);
      if (index !== -1) this.roles[index] = updatedRole;
      this.editingRole = null;
    });
  }

  // Delete a role
  deleteRole(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.roles = this.roles.filter((role) => role.id !== id);
    });
  }
}
