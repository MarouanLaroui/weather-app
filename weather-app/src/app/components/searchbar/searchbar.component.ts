import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() searchedString : string = "";
  @Output() searchedStringChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onKey(event : any){
    this.searchedStringChange.emit(event.target.value);
  }

}
