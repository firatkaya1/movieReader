import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moviewish',
  templateUrl: './moviewish.component.html',
  styles: [
  ]
})
export class MoviewishComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }

  public isSuccess:number = -1;

  movieWish = new FormGroup({
    urgentCode:new FormControl(null,[
      Validators.required
    ]),
    movieName:new FormControl(null,[
      Validators.required
    ]),
    directorName:new FormControl(null,[
      Validators.required
    ]),
    language:new FormControl(null,[
      Validators.required
    ]),
    message:new FormControl(null,[
      Validators.required
    ]),
    emailAddress:new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    isSendMessage:new FormControl(null,[
      Validators.requiredTrue
    ])});

  ngOnInit(): void {
  }

  ngOnSubmit(){
    console.log("calisti:");
    this.movieService.setMovieWish(this.movieWish).subscribe(
      data => { 
        this.isSuccess=1;
        setTimeout(() => {
          this.router.navigateByUrl('/wish/list');
        }, 2000); 
      },
      error => { this.isSuccess = 0; })
  }
}
