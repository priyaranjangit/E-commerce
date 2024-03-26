import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSliderComponent } from './set-slider.component';

describe('SetSliderComponent', () => {
  let component: SetSliderComponent;
  let fixture: ComponentFixture<SetSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
