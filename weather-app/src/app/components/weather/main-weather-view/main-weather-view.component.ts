import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'main-weather-view',
  templateUrl: './main-weather-view.component.html',
  styleUrls: ['./main-weather-view.component.css']
})
export class MainWeatherViewComponent implements OnInit {

  @Input() weather! : Weather
  constructor() {}

  ngOnInit(): void {
  }

}
