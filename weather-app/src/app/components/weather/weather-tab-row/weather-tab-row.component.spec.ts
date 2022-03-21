import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTabRowComponent } from './weather-tab-row.component';

describe('WeatherTabRowComponent', () => {
  let component: WeatherTabRowComponent;
  let fixture: ComponentFixture<WeatherTabRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTabRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTabRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
