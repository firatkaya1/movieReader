import { MovieWish } from './../../models/MovieWish';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviewishlist',
  templateUrl: './moviewishlist.component.html',
  styles: [
  ]
})
export class MoviewishlistComponent implements OnInit {

  public movieWishes:MovieWish[];

  constructor(private movieService:MovieService) { }


  ngOnInit(): void {
    this.movieService.getMovieWish("asc","date",10,1).subscribe(data => { this.movieWishes = data['content']});
  }

}
