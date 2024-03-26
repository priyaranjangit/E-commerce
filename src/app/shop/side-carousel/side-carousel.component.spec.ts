import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCarouselComponent } from './side-carousel.component';

describe('SideCarouselComponent', () => {
  let component: SideCarouselComponent;
  let fixture: ComponentFixture<SideCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
