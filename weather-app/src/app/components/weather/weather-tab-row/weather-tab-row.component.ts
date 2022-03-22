import { Component, Input, OnInit } from '@angular/core';
import { Unity } from 'src/app/models/TemperatureUnity/Unity';
import { Weather } from 'src/app/models/Weather/weather';
import { TemperatureConverter } from 'src/app/utils/TemperatureConverter';

@Component({
  selector: 'weather-tab-row',
  templateUrl: './weather-tab-row.component.html',
  styleUrls: ['./weather-tab-row.component.css']
})
export class WeatherTabRowComponent implements OnInit {

  @Input() weather! : Weather
  @Input() tempUnit! : Unity

  max_temp : number = 0
  min_temp : number = 0
  general_temp : number = 0

  constructor() { }

  ngOnInit(): void {
    this.max_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temp_max,this.tempUnit).toFixed(0)
    this.min_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temp_min,this.tempUnit).toFixed(0)
    this.general_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temperature,this.tempUnit).toFixed(0)
  }

}
