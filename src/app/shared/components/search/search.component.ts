import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from './../../models/Movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies:Movie[];
  public pages:Array<number>;
  public totalPages:string;

  public moviename:string ="all";
  public pageNumber:number = 1;
  public perPageSize:number = 10;
  public sortedBy:string ="movie_name";


  constructor(private movieService:MovieService,private router: ActivatedRoute,private route:Router,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.moviename = params['word'];
      this.pageNumber = params['page'];
      this.perPageSize = params['size'];
      this.sortedBy = params['sortedby'] == undefined ? "movie_rating" : params['sortedby'];
      this.checkParams();
      this.movieService.getMoviesByName(this.moviename,"asc",this.sortedBy,this.perPageSize,this.pageNumber).subscribe(
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
  ngOnChangePageSize(val:string){
    this.perPageSize = Number(val);
  }
  ngOnChangeSortedBy(val:string){
    switch(val) {
      case "rate": {
        this.sortedBy = "movie_rating";
        break;
      }
      case "date": {
        this.sortedBy = "movie_date";
        break;
      }
      case "time": {
        this.sortedBy = "movie_time"
        break;
      }
      default: {
        this.sortedBy = "movie_name";
        break;
      }
    }

  }
  ngOnChangePage(val:string){
    this.pageNumber = Number(val);
    this.redirectSearch();
  }
  redirectSearch(){
    this.route.navigateByUrl('/search?word='+this.moviename+'&page='+this.pageNumber+'&size='+this.perPageSize+'&sortedby='+this.sortedBy);
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

  }

    
}
