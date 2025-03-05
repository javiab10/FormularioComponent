import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedFormGeneralComponent } from './divided-form-general.component';

describe('DividedFormGeneralComponent', () => {
  let component: DividedFormGeneralComponent;
  let fixture: ComponentFixture<DividedFormGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedFormGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
