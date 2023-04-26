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

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  getMovieData(input: string | number):Observable<any> {
    console.log('ID in Service:',input);
    return this.HttpClient.get(`https://api.tvmaze.com/search/shows?q=${input}`)    
      // this.transformtoICurrentTV(data)

  }

  todayData(date:any):Observable<any> { 
    console.log('service date:', date)
    return this.HttpClient.get(`https://api.tvmaze.com/schedule?country=US&date=${date}`)
  }

  trendingMovieApiData(): Observable<any> {
    return this.HttpClient.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
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


  

  

