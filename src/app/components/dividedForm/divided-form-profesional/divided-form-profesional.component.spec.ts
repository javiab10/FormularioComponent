import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedFormProfesionalComponent } from './divided-form-profesional.component';

describe('DividedFormProfesionalComponent', () => {
  let component: DividedFormProfesionalComponent;
  let fixture: ComponentFixture<DividedFormProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedFormProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedFormProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
