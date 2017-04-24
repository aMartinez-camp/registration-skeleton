import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  private action: string;
  private name: string;
  private params: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.params = this.route.params.subscribe(params => {
       this.name = (params['name'] == 'new') ? 'Family Member!' : params['name'];
       this.action = (params['name'] == 'new') ? 'Add a New' : 'Edit'
    });
  }

}
