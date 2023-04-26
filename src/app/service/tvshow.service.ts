import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs';
import { ITvApp } from '../interface/itv-app';
import { ITvAppData } from '../interface/itv-app-data';




@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private HttpClient: HttpClient) {
  }

  getMovieData(input: string | number):Observable<any> {
    console.log('ID in Service:',input);
    return this.HttpClient.get(`https://api.tvmaze.com/search/shows?q=${input}`)    
      // this.transformtoICurrentTV(data)

  }

  todayData(date:any):Observable<any> { 
    console.log('service date:', date)
    return this.HttpClient.get(`https://api.tvmaze.com/schedule?country=US&date=${date}`)
  }
  // 2020-05-29
  topRatedData() {

  }

  
  // private transformtoICurrentTV(data: ITvAppData):ITvApp {
  //   return {
  //   title: data.name,
  //   image: data.image.medium,
  //   description: data.summary,
  //   genre: data.genres,
  //   rating: data.rating.average
  // }

  //     }
     }


  

  

