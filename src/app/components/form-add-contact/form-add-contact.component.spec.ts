import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddContactComponent } from './form-add-contact.component';

describe('FormAddContactComponent', () => {
  let component: FormAddContactComponent;
  let fixture: ComponentFixture<FormAddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
