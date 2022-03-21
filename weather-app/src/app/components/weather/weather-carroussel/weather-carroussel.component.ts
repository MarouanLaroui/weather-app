import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather/weather';

@Component({
  selector: 'weather-carroussel',
  templateUrl: './weather-carroussel.component.html',
  styleUrls: ['./weather-carroussel.component.css']
})
export class WeatherCarrousselComponent implements OnInit {

  @Input() weathers : Weather[] = []
  @Input() nbItems : number = 0
  displayed_weathers : Weather[] = []
  carrousselIndex : number = 0

  constructor() { }

  ngOnInit(): void {
    this.displayed_weathers = this.weathers.slice(0,9)
  }

  swipeRight(){
    if(this.carrousselIndex + this.nbItems < this.weathers.length - 1){
      this.carrousselIndex++
      this.displayed_weathers = this.weathers.slice(this.carrousselIndex,this.carrousselIndex + this.nbItems)
    }
  }

  swipeLeft(){
    if(this.carrousselIndex > 0){
      this.carrousselIndex--
      this.displayed_weathers = this.weathers.slice(this.carrousselIndex,this.carrousselIndex + this.nbItems)
    }
  }

}