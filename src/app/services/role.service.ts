import { Injectable } from '@angular/core';
import { RolesComponent } from '../auth/roles/roles.component';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  deleteRole(id: number) {
    throw new Error('Method not implemented.');
  }
  updateRole(editingRole: Role) {
    throw new Error('Method not implemented.');
  }
  addRole(newRole: Role) {
    throw new Error('Method not implemented.');
  }
  getRoles(): import("../models/role.model").Role[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
