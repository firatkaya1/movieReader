import { Observable } from 'rxjs';
import { Subtitle } from './../models/Subtitle';
import { Movie } from './../models/Movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  private root:string = "http://localhost:8080/";
  private allURI:string = "v1/movie/all";
  private searchURI:string = "v1/movie/search";
  private movieNameURI:string = "v1/movie/id/";
  private subtitleURI:string = "v1/subtitle/id/";


  getMovieById(id:string){
      return this.http.get<Movie>(this.root.concat(this.movieNameURI).concat(id));
  }


  getMovies(orderBy:string,sortedBy:string,pageSize:number,pageNumber:number){
    const body = {
      orderBy:orderBy,
      sortedBy:sortedBy,
      pageSize:pageSize,
      pageNumber:pageNumber
    };
      return this.http.post<Movie[]>(this.root.concat(this.allURI),body);
  }
  getMoviesByName(keyword:string,orderBy:string,sortedBy:string,pageSize:number,pageNumber:number){
    const body = {
      orderBy:orderBy,
      sortedBy:sortedBy,
      pageSize:pageSize,
      pageNumber:pageNumber,
      keyword:keyword
    };
      return this.http.post<Movie[]>(this.root.concat(this.searchURI),body);
  }

  getSubtitle(id:string):Observable<Subtitle[]> {
    return this.http.get<Subtitle[]>(this.root.concat(this.subtitleURI).concat(id)) ;
  }


}
