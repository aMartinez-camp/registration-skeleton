import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camp-credit',
  templateUrl: './camp-credit.component.html',
  styleUrls: ['./camp-credit.component.css']
})
export class CampCreditComponent implements OnInit {

  public service: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.service = this.dataService;
  }

}
