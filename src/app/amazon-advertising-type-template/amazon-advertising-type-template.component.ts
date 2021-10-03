import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-advertising-type-template',
  templateUrl: './amazon-advertising-type-template.component.html',
  styleUrls: ['./amazon-advertising-type-template.component.css'],
})
export class AmazonAdvertisingTypeTemplateComponent implements OnInit {
  
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
