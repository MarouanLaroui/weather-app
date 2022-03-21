import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Weather } from 'src/app/models/Weather/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }
  
  private jsonToWeathers(json : any) : Weather[]{
    let weathers : Weather[] = []

    for(let i = 0; i<json.list.length;i++){
      weathers.push(
        new Weather(
          json.list[i].weather[0].id,
          json.list[i].weather[0].description,
          json.list[i].weather[0].icon,
          json.list[i].main.temp,
          json.list[i].main.temp_min,
          json.list[i].main.temp_max,
          json.list[i].main.humidity,
          json.list[i].wind.speed
        )
      )
    }

    return weathers

  }

  getWeatherByName(cityName : string) : Observable<Weather[]>{
    return this.http.get<Weather[]>(environment.openApiURL + `/data/2.5/forecast?q=${cityName}&limit=5&appid=${environment.openWeatherApiKey}`)
    .pipe(
      map(json => this.jsonToWeathers(json)
      ))
  }

  getWeatherByCoordinates(longitude : number, latitude : number): Observable<any>{
    return this.http.get<any>(environment.openApiURL + `/data/2.5/onecall?lat=${longitude}&lon=${latitude}&appid=${environment.openWeatherApiKey}`)
  }
}
