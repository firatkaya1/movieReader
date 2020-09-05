import { Router } from '@angular/router';
import { Movie } from './../../models/Movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: Movie[];

  myControl = new FormControl();

  constructor(private movieService:MovieService,private spinner: NgxSpinnerService,private router: Router) { }

  ngOnInit(): void {
    
  }


  public getMovies(event:any){
    this.spinner.show();
    this.movieService.getMoviesByName(event.target.value ,"desc","movie_name",10,1).subscribe(
      data => 
      { 
        this.options = data['content'];
        setTimeout(() => {
          this.spinner.hide();
         
        }, 1000);
 
      })
  }
  public calculateStars(rating:string):number{
    return Number(rating.substring(0,3).replace(".",""));
  }
  public redirectMovie(val:string){
    this.router.navigateByUrl('/search?word='+val);

  }
}
