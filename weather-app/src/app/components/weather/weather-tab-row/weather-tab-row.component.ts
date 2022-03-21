import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-tab-row',
  templateUrl: './weather-tab-row.component.html',
  styleUrls: ['./weather-tab-row.component.css']
})
export class WeatherTabRowComponent implements OnInit {

  @Input() weather! : Weather
  
  constructor() { }

  ngOnInit(): void {
  }

}
