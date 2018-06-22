import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStartComponent } from './carousel-start.component';

describe('CarouselStartComponent', () => {
  let component: CarouselStartComponent;
  let fixture: ComponentFixture<CarouselStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
