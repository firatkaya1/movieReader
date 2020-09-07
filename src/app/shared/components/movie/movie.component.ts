import { Statics } from './../../models/Statics';
import { element } from 'protractor';
import { Subtitle } from './../../models/Subtitle';
import { Movie } from './../../models/Movie';
import { MovieService } from './../../services/movie.service';
import {MatPaginator} from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movieId:string;
  public movieInfo:Movie = null;
  public movies:Subtitle[];
  public isSubtitleExists:boolean;

  constructor(private movieService:MovieService,private route: ActivatedRoute,private spinner: NgxSpinnerService) { 
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
    });
    
  }  
  displayedColumns: string[] = ['startTime', 'endTime', 'line', 'message'];
  dataSource = new MatTableDataSource(this.movies);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.spinner.show();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.movieService.getMovieById(this.movieId).subscribe(
      data => {
        this.movieInfo = data;
        localStorage.setItem(data.movieId,JSON.stringify(data));
        this.movieService.getSubtitle("1243").subscribe(
          (data) => { 
            this.dataSource.data = data; 
            this.isSubtitleExists = true;},
          (error)=> { this.isSubtitleExists = false; });
        
      });
   
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);

  }

  applyFilter(filterValue:string) {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase(); 
  }

  calculateStars(rating:string):number{
    return Number(rating.substring(0,3).replace(".",""));
  }

  
  
}
