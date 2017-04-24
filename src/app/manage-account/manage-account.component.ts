import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  public service: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.service = this.dataService;
  }

}
