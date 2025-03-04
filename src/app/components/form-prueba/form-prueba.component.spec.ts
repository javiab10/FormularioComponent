import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPruebaComponent } from './form-prueba.component';

describe('FormPruebaComponent', () => {
  let component: FormPruebaComponent;
  let fixture: ComponentFixture<FormPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
