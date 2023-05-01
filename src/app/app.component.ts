import { Component, HostListener } from '@angular/core';
import {TvshowService} from './service/tvshow.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-Search';
  navbg: any;
  
  // searchResult: any = []



  // constructor(private TvshowService: TvshowService) {}

  // doSearch(searchValue: string) {
  //   this.TvshowService.getMovieData(searchValue).subscribe(data => {
  //    console.log(data) 
  //     this.searchResult = data})
  // }

    // The background of navbar turns black if you start scrolling down so you can see the navbar more easily. 
    @HostListener('document:scroll') scrollover() {

      if ((document.body.scrollTop > 0) || document.documentElement.scrollTop > 0) {
        this.navbg = {
          'background-color': '#000000'
        }
      } else {
        this.navbg = {}
  }
    }


}
