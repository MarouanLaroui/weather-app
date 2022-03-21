import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCarrousselComponent } from './weather-carroussel.component';

describe('WeatherCarrousselComponent', () => {
  let component: WeatherCarrousselComponent;
  let fixture: ComponentFixture<WeatherCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCarrousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
