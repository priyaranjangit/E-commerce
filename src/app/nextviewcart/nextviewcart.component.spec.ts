import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextviewcartComponent } from './nextviewcart.component';

describe('NextviewcartComponent', () => {
  let component: NextviewcartComponent;
  let fixture: ComponentFixture<NextviewcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextviewcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextviewcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
