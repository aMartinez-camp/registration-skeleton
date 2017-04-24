import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  private name: string;
  private params: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.params = this.route.params.subscribe(params => {
       this.name = params['name'];
    });
  }

  pay() {
    alert('Super Cool Thanks, yo!');
  }

}
