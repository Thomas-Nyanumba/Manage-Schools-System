import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentsgradescomponent } from './studentsgrades.component';

describe('StudentsgradesComponent', () => {
  let component: studentsgradescomponent;
  let fixture: ComponentFixture<studentsgradescomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [studentsgradescomponent]
    });
    fixture = TestBed.createComponent(studentsgradescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
