import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Unity } from './models/TemperatureUnity/Unity';
import { Weather } from './models/Weather/weather';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'weather-app';
  weathers!: Observable<Weather[]>
  searchedCityName : string = ""
  selectedWeather? : Weather
  selectedUnit : Unity = Unity.Celsius
  errorMsg : string = "Oops wrong city name, try again !"
  isFirstApparition : boolean = true
 
  constructor(private weatherService : WeatherService){}

  searchCityWeather(){
    this.weathers = this.weatherService.getWeatherByName(this.searchedCityName)
    this.isFirstApparition = false
  }

  selectWeather(weather : Weather){
    this.selectedWeather = weather
    this.isFirstApparition = false
  }
}
