import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvshowService } from '../service/tvshow.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  url: any = `https://api.themoviedb.org/3/movie/297762?api_key=###&append_to_response=videos`

constructor(private TvshowService: TvshowService, private route: ActivatedRoute) {}

getMovieDetails: any;


ngOnInit(): void {
  let getParamId = this.route.snapshot.paramMap.get('id');
  console.log('getParamID:', getParamId)
  this.getMovieApiData(getParamId) 
}

getMovieApiData(id: any) {
  this.TvshowService.getMovieApiData(id).subscribe((result) => {
    console.log('getmoviedetails#', result);
    this.getMovieDetails = result
  })
}


}


