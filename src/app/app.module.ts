import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { TemplateComponent } from './template/template.component';
import { CampaignTemplateComponent } from './campaign-template/campaign-template.component';
import { AdGroupTemplateComponent } from './ad-group-template/ad-group-template.component';
import { AdGroupChildrenTemplateComponent } from './ad-group-children-template/ad-group-children-template.component';
import { AmazonAdvertisingTypeTemplateComponent } from './amazon-advertising-type-template/amazon-advertising-type-template.component';

@NgModule({
  imports: [BrowserModule, FormsModule, TreeModule],
  declarations: [
    AppComponent,

    TemplateComponent,
    AmazonAdvertisingTypeTemplateComponent,
    CampaignTemplateComponent,
    AdGroupTemplateComponent,
    AdGroupChildrenTemplateComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
