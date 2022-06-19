import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ProjectService} from "../../module/administration/service/project.service";
import {ProjectDefinition} from "../../module/administration/model/project-definition";

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {
  environment = environment;
  projectList!: ProjectDefinition[];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(l => this.projectList = l);
  }

}
