import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-group-children-template',
  templateUrl: './ad-group-children-template.component.html',
  styleUrls: ['./ad-group-children-template.component.css'],
})
export class AdGroupChildrenTemplateComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
