import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface MovieElements {
  movie_name: string;
  movie_date: string;
  movie_rating: string;
  movie_time: string;
  movie_genre: string;
  movie_img: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: MovieElements[] = [
    {
      "movie_name": "Lucifer",
      "movie_date": "2016–",
      "movie_rating": " 8.2/10 ",
      "movie_time": "42 min",
      "movie_genre": "Crime, Drama, Fantasy",
      "movie_img": "https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UY268_CR0,0,182,268_AL_.jpg"
    },
    {
      "movie_name": "Lovecraft Country",
      "movie_date": "2020–",
      "movie_rating": " 7.5/10 ",
      "movie_time": "60 min",
      "movie_genre": "Drama, Fantasy, Horror",
      "movie_img": "https://m.media-amazon.com/images/M/MV5BM2ExMmZlZDQtOTJiZC00Y2UzLWIxNDYtZTdiYzAzYzQyMmQ4XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "movie_name": "Yellowstone",
      "movie_date": "2018–",
      "movie_rating": " 8.5/10 ",
      "movie_time": "60 min",
      "movie_genre": "Drama, Western",
      "movie_img": "https://m.media-amazon.com/images/M/MV5BZjhkNWM1NTQtODI4NS00NzllLTg1ODAtYjg3N2QxZjc3ZjRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR8,0,182,268_AL_.jpg"
    },
    {
      "movie_name": "The Boys",
      "movie_date": "2019–",
      "movie_rating": " 8.7/10 ",
      "movie_time": "60 min",
      "movie_genre": "Action, Comedy, Crime",
      "movie_img": "https://m.media-amazon.com/images/M/MV5BN2JjNmFjZmItMDVlMS00NzExLWJkOTMtY2U3ZDRiZGUyMTdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "movie_name": "Cobra Kai",
      "movie_date": "2018–",
      "movie_rating": " 8.8/10 ",
      "movie_time": "30 min",
      "movie_genre": "Action, Comedy, Drama",
      "movie_img": "https://m.media-amazon.com/images/M/MV5BZTUxMzMyYjYtNWU1MS00NTViLTgwMjEtNmY1NzJiZDg1NGU4XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }]

  myControl = new FormControl();
  filteredOptions:Observable<MovieElements[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value:string): MovieElements[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.movie_name.toLowerCase().includes(filterValue));
  }

}
