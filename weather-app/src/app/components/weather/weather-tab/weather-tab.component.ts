import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-tab',
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.css']
})
export class WeatherTabComponent implements OnInit {

  @Input() weathers : Weather[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
