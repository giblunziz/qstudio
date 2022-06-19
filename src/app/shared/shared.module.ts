import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSelectorComponent } from './project-selector/project-selector.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    ProjectSelectorComponent
  ],
  exports: [
    ProjectSelectorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
