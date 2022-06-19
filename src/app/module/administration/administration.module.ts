import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { MainComponent } from './main/main.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    MainComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule
  ],
  bootstrap: [ MainComponent]
})
export class AdministrationModule { }
