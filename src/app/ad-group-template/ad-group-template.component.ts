import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-group-template',
  templateUrl: './ad-group-template.component.html',
  styleUrls: ['./ad-group-template.component.css'],
})
export class AdGroupTemplateComponent implements OnInit {
  
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
