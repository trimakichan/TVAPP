import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowService } from '../service/tvshow.service';
import { NgClass } from '@angular/common';
import { string } from 'prop-types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  url: any = `https://api.themoviedb.org/3/movie/297762?api_key=###&append_to_response=videos`;

  constructor(
    private TvshowService: TvshowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getMovieDetails: any;
  href: string = '';
  trailerID: any;

  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    console.log('getParamID:', getParamId);
    this.href = this.router.url;
    this.getMovieApiData(getParamId);
  }

  getMovieApiData(id: any) {
    if (this.href.includes('movie')) {
      console.log('is working?');
      this.TvshowService.getMovieApiData(id).subscribe((result) => {
        console.log('getmoviedetails:', result);
        this.getMovieDetails = result;
        this.trailerID = this.getMovieDetails.videos.results.find(
          (v: { name: string }) =>
            v.name.includes('Official Trailer')).key;
        console.log('trailer:', this.trailerID);
      });

      // this.TvshowService.getTrailerApitData(id).subscribe((result) => {
      //   console.log('getTrailerData:', result);
      //   this.trailer = result;
      // });
    } else {
      this.TvshowService.getTvApiData(id).subscribe((result) => {
        console.log('getTvdetails:', result);
        this.getMovieDetails = result;
        this.trailerID = this.getMovieDetails.videos.results.find(
          (v: { name: string }) =>
            v.name.includes('Official Trailer')
        ).key;
        console.log('trailer:', this.trailerID);
      });
    }
  }

  // getTrailerApiData(id: any) {
  //   this.TvshowService.getTrailerApitData(id).subscribe((result) => {
  //     console.log('getTrailerData:', result);
  //     this.trailer = result;
  //   });
  // }
}
