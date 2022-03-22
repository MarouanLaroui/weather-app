import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MainWeatherViewComponent } from './components/weather/main-weather-view/main-weather-view.component';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';
import { WeatherCarrousselComponent } from './components/weather/weather-carroussel/weather-carroussel.component';
import { WeatherTabComponent } from './components/weather/weather-tab/weather-tab.component';
import { WeatherTabRowComponent } from './components/weather/weather-tab-row/weather-tab-row.component';
import { UnitSelectorComponent } from './components/unit-selector/unit-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MainWeatherViewComponent,
    WeatherCardComponent,
    WeatherCarrousselComponent,
    WeatherTabComponent,
    WeatherTabRowComponent,
    UnitSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
