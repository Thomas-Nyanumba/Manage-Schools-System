import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsEnrollmentComponent } from './studentsenrollment.component';

describe('StudentsenrollmentComponent', () => {
  let component: StudentsEnrollmentComponent;
  let fixture: ComponentFixture<StudentsEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsEnrollmentComponent]
    });
    fixture = TestBed.createComponent(StudentsEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
