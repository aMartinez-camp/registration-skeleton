import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  DataService } from '../../services/data.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  public service: any;
  
  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.service = this.dataService;
  }

  addNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  editMember(name) {
    this.router.navigate([name], {relativeTo: this.route});
  }

}
