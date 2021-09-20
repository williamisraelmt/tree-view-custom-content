import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-template',
  templateUrl: './campaign-template.component.html',
  styleUrls: ['./campaign-template.component.css'],
})
export class CampaignTemplateComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
