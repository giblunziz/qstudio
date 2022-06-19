import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../service/project.service";
import {ProjectDefinition} from "../model/project-definition";

@Component({
  selector: 'app-admin-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectList!: ProjectDefinition[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(l => this.projectList = l);
  }

}
