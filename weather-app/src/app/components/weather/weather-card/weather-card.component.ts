import { Component, Input, OnInit, Output } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weather! : Weather

  constructor() { }

  ngOnInit(): void {
  }

}
