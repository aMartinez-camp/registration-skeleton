import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-family',
  templateUrl: './view-family.component.html',
  styleUrls: ['./view-family.component.css']
})
export class ViewFamilyComponent implements OnInit {

  public service: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.service = this.dataService;
  }

}
