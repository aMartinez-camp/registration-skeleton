import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  public service: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.service = this.dataService;
  }

}
