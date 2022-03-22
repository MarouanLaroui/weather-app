import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Unity } from 'src/app/models/TemperatureUnity/Unity';
import { Weather } from 'src/app/models/Weather/weather';
import { TemperatureConverter } from 'src/app/utils/TemperatureConverter';

@Component({
  selector: 'main-weather-view',
  templateUrl: './main-weather-view.component.html',
  styleUrls: ['./main-weather-view.component.css']
})
export class MainWeatherViewComponent implements OnInit {

  @Input() weather! : Weather
  @Input() tempUnit! : Unity

  max_temp : number = 0
  min_temp : number = 0
  general_temp : number = 0

  constructor() {}

  ngOnInit(): void {
    this.computeTemperatures()
  }

  ngOnChanges(changes: SimpleChanges) { 
    this.computeTemperatures()
  }

  computeTemperatures():void{
    this.max_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temp_max,this.tempUnit).toFixed(0)
    this.min_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temp_min,this.tempUnit).toFixed(0)
    this.general_temp = +TemperatureConverter.convertKelvinToUnitMeasure(this.weather.temperature,this.tempUnit).toFixed(0)
  }

}
