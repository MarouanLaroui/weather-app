import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MainWeatherViewComponent } from './components/weather/main-weather-view/main-weather-view.component';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';
import { WeatherCarrousselComponent } from './components/weather/weather-carroussel/weather-carroussel.component';
import { WeatherDayCardComponent } from './components/weather/weather-day-card/weather-day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MainWeatherViewComponent,
    WeatherCardComponent,
    WeatherCarrousselComponent,
    WeatherDayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
