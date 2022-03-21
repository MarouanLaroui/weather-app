import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-carroussel',
  templateUrl: './weather-carroussel.component.html',
  styleUrls: ['./weather-carroussel.component.css']
})
export class WeatherCarrousselComponent implements OnInit {

  @Input() weathers : Weather[] = []
  displayed_weathers : Weather[] = []

  constructor() { }

  ngOnInit(): void {
    this.displayed_weathers = this.weathers.splice(0,7)
  }

}
