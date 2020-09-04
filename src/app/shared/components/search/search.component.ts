import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from './../../models/Movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies:Movie[];
  public pages:Array<number>;
  public pagenumber:string;
  public totalPages:string;

  public moviename:string ="all";
  public pageNumber:number = 1;
  public perPageSize:number = 10;

  constructor(private movieService:MovieService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.moviename = params['word'];
      this.pageNumber = params['page'];
      this.perPageSize = params['size'];
      this.checkParams();
      this.movieService.getMoviesByName(this.moviename,"desc","movie_rating",this.perPageSize,this.pageNumber).subscribe(
        data => {  
          this.totalPages = data['totalElements']; 
          this.movies = data['content']; 
          this.pages = new Array(data['totalPages']);
        });
    });    
      
  }

  calculateStars(rating:string):number{
    return Number(rating.substring(0,3).replace(".",""));
  }
  checkParams(){
    if(this.perPageSize == undefined){
      this.perPageSize = 10;
    }
    if(this.moviename == undefined) {
      this.moviename = "BreakingBad";
    }
    if(this.pageNumber == undefined){
      this.pageNumber = 1;
    }
  }

}
