import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TvshowService } from '../service/tvshow.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements OnInit {

  @ViewChild('widgetsTV') widgetsTV: ElementRef | any;

  scrollLeft(){
    this.widgetsTV.nativeElement.scrollLeft -= 500;
  }

  scrollRight(){
    this.widgetsTV.nativeElement.scrollLeft += 500;
  }

  constructor(private service:TvshowService){}


  todayTVResults:any = []
  trendingMovieResult:any = []
  topRatedTVResult: any = []

  date:any = this.formatDate(new Date())
  

  dateFormat(num: number) {
    return num.toString().padStart(2, '0')
  }
//Format using resuable function
  formatDate(date:Date) {
    return (
      [
        date.getFullYear(),
        this.dateFormat(date.getMonth() + 1),
        this.dateFormat(date.getDate()),
      ].join('-') 
    );
  } 


  ngOnInit(): void {
    // this.todayShowData();
    this.trendingData();
    this.topRatedTV();
  }

  // todayShowData() {
  //   this.service.todayData(this.date).subscribe((result) => {
  //     console.log('todayTVResults:', result)
  //     this.todayTVResults = result
  //     console.log(result)
    
  //   })
  // }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
     console.log('trendingdata#', result)
     this.trendingMovieResult = result.results;
     console.log('trending:', this.trendingMovieResult)
    })
  }

  topRatedTV() {
    this.service.topRatedTvApiData().subscribe((result) => {
     console.log('topRated TV Shows:', result)
     this.topRatedTVResult = result.results;
    
    })
  }

  }




