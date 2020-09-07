import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastview',
  templateUrl: './lastview.component.html',
  styleUrls: ['./lastview.component.css']
})
export class LastviewComponent implements OnInit {

  public lastVisits:Movie[] = [];

  constructor() {
    var values:string[] = Object.keys(localStorage);
    if(localStorage.length > 5) {
      for (let index = 4; 0 <= index; index--) {
        this.lastVisits[index] = JSON.parse(localStorage.getItem(values[index]));  
      }
      for(let index=0;index < localStorage.length-5;index++){
        console.log("silindi");
        localStorage.removeItem(values[index]);
      }
    } else {
      for (let index = 0; index < localStorage.length; index++) {
        this.lastVisits[index] = JSON.parse(localStorage.getItem(values[index]));  
      }
    }
   }



  ngOnInit(): void {
    

  }

  shortMovieName(val:string):string{
    return val.substring(val.indexOf("||")+2);
  }


}
