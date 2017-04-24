import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.css']
})
export class AddCreditComponent implements OnInit {

  public service: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service = this.dataService;
  }

  total() {
    let t = 0;
    
    for (let i = 0; i < this.service.householdMembers.length; i++) {
      t += Number(this.service.householdMembers[i].newcampcredit);
    }

    return t;
  }

  goToPay(){
    this.router.navigate(['pay', 'Camp Credit'], { relativeTo: this.route });
  }

}
