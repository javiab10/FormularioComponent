import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedFormComponent } from './divided-form.component';

describe('DividedFormComponent', () => {
  let component: DividedFormComponent;
  let fixture: ComponentFixture<DividedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
