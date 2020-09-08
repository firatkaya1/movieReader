import { MovieWish } from './../../models/MovieWish';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviewishdetail',
  templateUrl: './moviewishdetail.component.html',
  styleUrls: ['./moviewishdetail.component.css']
})
export class MoviewishdetailComponent implements OnInit {

  public wishId:string;
  public movieWish:MovieWish;

  constructor(private route: ActivatedRoute,private movieService:MovieService) { 
    this.route.paramMap.subscribe(params => {
      this.wishId = params.get('id');

    });
  }

  ngOnInit(): void {
    this.movieService.getMovieWishDataById(this.wishId).subscribe(data => {this.movieWish = data;} )
  }

}
