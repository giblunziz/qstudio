import {Injectable, OnInit} from '@angular/core';
import {ProjectDefinition} from "../model/project-definition";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService  {

  constructor(private http: HttpClient) {  }

  getProjects(): Observable<ProjectDefinition[]>{
    return this.http.get<ProjectDefinition[]>(environment.host + environment.api.admin.project)
      .pipe(
        tap((response: any) => this.log(response)),
        catchError((error) => this.handleError(error,undefined))
      );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error ,errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
