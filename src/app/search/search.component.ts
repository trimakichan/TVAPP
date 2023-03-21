import { Component,OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() searchEvent = new EventEmitter<string | any>()

  search = new FormControl('', [Validators.minLength(2)])
  constructor() {}

ngOnInit(): void {
  this.search.valueChanges 
.pipe(debounceTime(1000))
.subscribe(searchValue => {
  if (!this.search.invalid) {
    console.log(this.search)
    this.searchEvent.emit(searchValue)
  }
})
  
}

}

