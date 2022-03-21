import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherByName(name : string) : Observable<any>{
    return this.http.get<any>(environment.openApiURL + "/")
  }

  getWeatherByCoordinates(longitude : number, latitude : number): Observable<any>{
    return this.http.get<any>(environment.openApiURL + `/data/2.5/onecall?lat=${longitude}&lon=${latitude}&appid=${environment.openWeatherApiKey}`)
  }
}
