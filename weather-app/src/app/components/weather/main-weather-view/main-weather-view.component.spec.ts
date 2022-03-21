import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeatherViewComponent } from './main-weather-view.component';

describe('MainWeatherViewComponent', () => {
  let component: MainWeatherViewComponent;
  let fixture: ComponentFixture<MainWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWeatherViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
