import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHorzSliderComponent } from './set-horz-slider.component';

describe('SetHorzSliderComponent', () => {
  let component: SetHorzSliderComponent;
  let fixture: ComponentFixture<SetHorzSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetHorzSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetHorzSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
