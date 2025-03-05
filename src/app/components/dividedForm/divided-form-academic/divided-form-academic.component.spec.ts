import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedFormAcademicComponent } from './divided-form-academic.component';

describe('DividedFormAcademicComponent', () => {
  let component: DividedFormAcademicComponent;
  let fixture: ComponentFixture<DividedFormAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedFormAcademicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedFormAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
