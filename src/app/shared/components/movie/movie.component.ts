import {MatPaginator} from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


export interface MovieElements {
  line: string;
  startTime: string;
  endTime: string;
  message: string;
}
const movies: MovieElements[] = [
  {
    "startTime": "00:01:04,729",
    "endTime": "00:01:09,729",
    "line": "1",
    "message": "My dear Frodo:"
  },
  {
    "startTime": "00:01:13,071",
    "endTime": "00:01:14,738",
    "line": "2",
    "message": "You asked me once..."
  },
  {
    "startTime": "00:01:14,739",
    "endTime": "00:01:19,618",
    "line": "3",
    "message": "...if I had told you everything there was to know about my adventures.</i>"
  },
  {
    "startTime": "00:01:19,619",
    "endTime": "00:01:20,911",
    "line": "4",
    "message": "And while I can honestly..."
  },
  {
    "startTime": "00:01:20,912",
    "endTime": "00:01:22,204",
    "line": "5",
    "message": "...say I have told you..."
  },
  {
    "startTime": "00:01:22,205",
    "endTime": "00:01:24,581",
    "line": "6",
    "message": "...the truth..."
  },
  {
    "startTime": "00:01:24,582",
    "endTime": "00:01:29,582",
    "line": "7",
    "message": "...I may not have told you all of it."
  },
  {
    "startTime": "00:01:34,884",
    "endTime": "00:01:38,428",
    "line": "8",
    "message": "I am old now, Frodo."
  },
  {
    "startTime": "00:01:38,429",
    "endTime": "00:01:43,429",
    "line": "9",
    "message": "I'm not the same Hobbit I once was."
  },
  {
    "startTime": "00:01:44,477",
    "endTime": "00:01:46,186",
    "line": "10",
    "message": "I think..."
  },
  {
    "startTime": "00:01:46,187",
    "endTime": "00:01:49,189",
    "line": "11",
    "message": "...it is time for you to know..."
  },
  {
    "startTime": "00:01:49,190",
    "endTime": "00:01:53,360",
    "line": "12",
    "message": "...what really happened."
  },
  {
    "startTime": "00:01:53,361",
    "endTime": "00:01:55,112",
    "line": "13",
    "message": "It began..."
  },
  {
    "startTime": "00:01:55,113",
    "endTime": "00:01:57,906",
    "line": "14",
    "message": "...long 890--"
  },
  {
    "startTime": "00:01:57,907",
    "endTime": "00:02:01,285",
    "line": "15",
    "message": "...in a land far away to the east..."
  },
  {
    "startTime": "00:02:01,286",
    "endTime": "00:02:06,286",
    "line": "16",
    "message": "...the like of which you will not find in the world today.</i>"
  },
  {
    "startTime": "00:02:16,259",
    "endTime": "00:02:18,969",
    "line": "17",
    "message": "There was the city of Dale."
  },
  {
    "startTime": "00:02:18,970",
    "endTime": "00:02:20,304",
    "line": "18",
    "message": "Its markets known..."
  },
  {
    "startTime": "00:02:20,305",
    "endTime": "00:02:21,597",
    "line": "19",
    "message": "...far and wide."
  },
  {
    "startTime": "00:02:21,598",
    "endTime": "00:02:25,767",
    "line": "20",
    "message": "Full of the bounties of vine and vale."
  },
  {
    "startTime": "00:02:25,768",
    "endTime": "00:02:30,768",
    "line": "21",
    "message": "Peaceful and prosperous."
  },
  {
    "startTime": "00:02:30,940",
    "endTime": "00:02:33,442",
    "line": "22",
    "message": "For this city lay before the doors..."
  },
  {
    "startTime": "00:02:33,443",
    "endTime": "00:02:37,362",
    "line": "23",
    "message": "...of the greatest kingdom in Middle-earth:"
  },
  {
    "startTime": "00:02:37,363",
    "endTime": "00:02:39,740",
    "line": "24",
    "message": "Erebor."
  },
  {
    "startTime": "00:02:39,741",
    "endTime": "00:02:42,034",
    "line": "25",
    "message": "Stronghold of Thror..."
  },
  {
    "startTime": "00:02:42,035",
    "endTime": "00:02:45,037",
    "line": "26",
    "message": "...King Under the Mountain. Mightiest..."
  },
  {
    "startTime": "00:02:45,038",
    "endTime": "00:02:47,998",
    "line": "27",
    "message": "...of the Dwarf Lords."
  },
  {
    "startTime": "00:02:47,999",
    "endTime": "00:02:50,917",
    "line": "28",
    "message": "Thror ruled with utter surety..."
  },
  {
    "startTime": "00:02:50,918",
    "endTime": "00:02:53,545",
    "line": "29",
    "message": "...never doubting his house would endure..."
  },
  {
    "startTime": "00:02:53,546",
    "endTime": "00:02:55,005",
    "line": "30",
    "message": "...for his line lay secure..."
  },
  {
    "startTime": "00:02:55,006",
    "endTime": "00:02:57,758",
    "line": "31",
    "message": "...in the lives of his son..."
  },
  {
    "startTime": "00:02:57,759",
    "endTime": "00:03:00,761",
    "line": "32",
    "message": "...and grandson."
  },
  {
    "startTime": "00:03:00,762",
    "endTime": "00:03:04,222",
    "line": "33",
    "message": "Ah, Frodo. Erebor."
  },
  {
    "startTime": "00:03:04,223",
    "endTime": "00:03:06,683",
    "line": "34",
    "message": "Built deep within the mountain itself..."
  },
  {
    "startTime": "00:03:06,684",
    "endTime": "00:03:10,520",
    "line": "35",
    "message": "...the beauty of this fortress city was legend."
  },
  {
    "startTime": "00:03:10,521",
    "endTime": "00:03:13,273",
    "line": "36",
    "message": "Its wealth lay in the earth..."
  },
  {
    "startTime": "00:03:13,274",
    "endTime": "00:03:15,192",
    "line": "37",
    "message": "...in precious gems hewn..."
  },
  {
    "startTime": "00:03:15,193",
    "endTime": "00:03:18,528",
    "line": "38",
    "message": "...from rock and in great seams of gold..."
  },
  {
    "startTime": "00:03:18,529",
    "endTime": "00:03:23,529",
    "line": "39",
    "message": "...running like rivers through stone."
  },
  {
    "startTime": "00:03:24,243",
    "endTime": "00:03:26,078",
    "line": "40",
    "message": "The skill of the Dwarves..."
  },
  {
    "startTime": "00:03:26,079",
    "endTime": "00:03:29,081",
    "line": "41",
    "message": "...was unequaled, fashioning objects..."
  },
  {
    "startTime": "00:03:29,082",
    "endTime": "00:03:31,917",
    "line": "42",
    "message": "...of great beauty..."
  },
  {
    "startTime": "00:03:31,918",
    "endTime": "00:03:36,213",
    "line": "43",
    "message": "...out of diamond, emerald, ruby and sapphire.</i>"
  },
  {
    "startTime": "00:03:36,214",
    "endTime": "00:03:38,006",
    "line": "44",
    "message": "Ever they delved deeper..."
  },
  {
    "startTime": "00:03:38,007",
    "endTime": "00:03:40,759",
    "line": "45",
    "message": "...down into the dark."
  },
  {
    "startTime": "00:03:40,760",
    "endTime": "00:03:45,760",
    "line": "46",
    "message": "And that is where they found it."
  },
  {
    "startTime": "00:03:49,644",
    "endTime": "00:03:53,605",
    "line": "47",
    "message": "The Heart of the Mountain."
  },
  {
    "startTime": "00:03:53,606",
    "endTime": "00:03:56,400",
    "line": "48",
    "message": "The Arkenstone."
  },
  {
    "startTime": "00:03:56,401",
    "endTime": "00:03:59,444",
    "line": "49",
    "message": "Thror named it The King's Jewel."
  },
  {
    "startTime": "00:03:59,445",
    "endTime": "00:04:02,614",
    "line": "50",
    "message": "He took it as a sign, a sign that his right to rule...</i>"
  }]
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  
  displayedColumns: string[] = ['startTime', 'endTime', 'line', 'message'];
  dataSource = new MatTableDataSource(movies);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue:string) {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase(); 
  }

}
