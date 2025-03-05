import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedFormPersonalComponent } from './divided-form-personal.component';

describe('DividedFormPersonalComponent', () => {
  let component: DividedFormPersonalComponent;
  let fixture: ComponentFixture<DividedFormPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedFormPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedFormPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
