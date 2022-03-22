import { Component, Input, OnInit, Output } from '@angular/core';
import { Unity } from 'src/app/models/TemperatureUnity/Unity';
import { Weather } from 'src/app/models/Weather/weather';
import { TemperatureConverter } from 'src/app/utils/TemperatureConverter';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weather! : Weather
  @Input() tempUnit! : Unity

  convertedTemperature : number = 0

  constructor() { }

  ngOnInit(): void {
    this.convertedTemperature = TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temperature,this.tempUnit)
  }

}
