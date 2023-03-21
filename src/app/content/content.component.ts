import { Component, Input } from '@angular/core';
// import { TvshowService } from '../service/tvshow.service';
import { ITvApp } from '../interface/itv-app';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() tvDataResult: ITvApp;

  constructor() {
    this.tvDataResult = {
        title: '',
        image: '',
        description: '',
        genre: [],
        rating: 0
    }
  }
}
