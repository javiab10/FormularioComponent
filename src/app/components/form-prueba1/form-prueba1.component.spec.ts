import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrueba1Component } from './form-prueba1.component';

describe('FormPrueba1Component', () => {
  let component: FormPrueba1Component;
  let fixture: ComponentFixture<FormPrueba1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrueba1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPrueba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
