import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit {
  fName:string;
  lName:string;
  constructor() {
    this.fName="Jayati"
    this.lName="Maji"
   }

  ngOnInit() {
  }

}
