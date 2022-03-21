import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-tab',
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.css']
})
export class WeatherTabComponent implements OnInit {

  @Input() weathers : Weather[] = []
  filteredWeathers : Weather[] = []

  constructor() { }

  ngOnInit(): void {
    if(this.weathers.length>0){
      console.log("filter")

      let lastDate : Date = new Date();
      let currentHour : string = this.weathers[0].hour;

      this.filteredWeathers = this.weathers.filter(weather => {
        return weather.date != lastDate &&  weather.hour == currentHour
      })
    }
  }
  
}
