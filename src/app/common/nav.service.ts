import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of, tap} from "rxjs";
import {ApplicationModule} from "./ApplicationModule";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private http: HttpClient) { }

  getModules(): Observable<ApplicationModule[]> {
    console.log(environment.host + environment.api.nav)
    return this.http.get<ApplicationModule[]>(environment.host + environment.api.nav)
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
