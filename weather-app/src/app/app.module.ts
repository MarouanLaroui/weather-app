import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MainWeatherViewComponent } from './components/weather/main-weather-view/main-weather-view.component';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MainWeatherViewComponent,
    WeatherCardComponent
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
