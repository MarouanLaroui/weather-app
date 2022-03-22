import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unity } from 'src/app/models/TemperatureUnity/Unity';

@Component({
  selector: 'unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.css']
})
export class UnitSelectorComponent implements OnInit {

  @Input() unity! : Unity
  @Output() unityChange = new EventEmitter();
  units : Unity[] = []
  

  constructor() { }

  /*Temporary solution to test the dropdown*/
  ngOnInit(): void {
    this.units  = [Unity.Celsius,Unity.Fahrenheit, Unity.Kelvin]
  }

}
