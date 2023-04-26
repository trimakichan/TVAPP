import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../service/tvshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:TvshowService){}
  todayTVResults:any = []
  topRated: any = []
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
    this.todayShowData();
    // this.topRatedData();
  }

  todayShowData() {
    this.service.todayData(this.date).subscribe((result) => {
      console.log('todayTVResults:', result)
      this.todayTVResults = result
      console.log(result)
    
    })
  }

  // topRatedData() {
  //   this.service.topRatedData().subscribe((result) => {
  //     console.log('Home top rated data:', result)
  //   })

  }




