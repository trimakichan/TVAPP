import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  getMovieData(input: string | number):Observable<any> {
    console.log('ID in Service:',input);
    return this.HttpClient.get(`${this.baseurl}/search/multi?api_key=${environment.appId}&query=${input}&include_adult=false`)   

  }

  // todayData(date:any):Observable<any> { 
  //   console.log('service date:', date)
  //   return this.HttpClient.get(`https://api.tvmaze.com/schedule?country=US&date=${date}`)
  // }

  trendingMovieApiData(): Observable<any> {
    return this.HttpClient.get(`${this.baseurl}/trending/movie/day?api_key=${environment.appId}`);
  }


  topRatedTvApiData(): Observable<any> {
    return this.HttpClient.get(`${this.baseurl}/tv/top_rated?api_key=${environment.appId}&language=en-US&page=1`);
  
  }

  getMovieApiData(id: any):Observable<any> {
    return this.HttpClient.get(`${this.baseurl}/movie/${id}?api_key=${environment.appId}&append_to_response=videos`)
  } 

  getTvApiData(id: any):Observable<any> {
    return this.HttpClient.get(`${this.baseurl}/tv/${id}?api_key=${environment.appId}&append_to_response=videos`)
  } 

  
     }


  

  

