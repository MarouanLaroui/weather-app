import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() searchedString : string = "";
  @Input() placeholder : String = "";
  @Output() searchedStringChange = new EventEmitter();
  @Output() onSearchEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onKey(event : any){
    this.searchedStringChange.emit(event.target.value);
  }

  onButtonClick(){
    this.onSearchEvent.emit()
  }

}
