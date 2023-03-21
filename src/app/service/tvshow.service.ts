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

  constructor(private HttpClient: HttpClient) { }

  getMovieData(input: string | number){
    console.log(input);
    return this.HttpClient.get<ITvAppData>(`https://api.tvmaze.com/singlesearch/shows?q=${input}`)
    .pipe(map((data):ITvApp => (console.log(data, '#ApiData'),
      
      this.transformtoICurrentTV(data)
     )))

  }
  
  private transformtoICurrentTV(data: ITvAppData):ITvApp {
    return {
    title: data.name,
    image: data.image.medium,
    description: data.summary,
    genre: data.genres,
    rating: data.rating.average
  }
    //  this.arr.push(data)
    // //  console.log(this.arr)
    //  for(let i = 0; i < this.arr.length; i++) {
    //     title: this.arr[i].name
    //     description: this.arr[i].summary
    //     console.log(this.arr[i],'#filtered')
    //   }
    //   return this.arr

      }
     }
    //  console.log(this.arr, 'arr#')
    //  for(let i: any; i < this.arr.length; i++) {
    //   console.log(i)
    // return {
    //   title: data.name,
    //   // image: data.image.medium,
    //   description: data.summary,
    //   // genre: data.genres,
    //   // rating: data.show.average.rating 
     
    //  }  
  
//   }
// }


  

  

