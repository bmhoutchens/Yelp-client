import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import{Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json",
    "Authorization" : "Bearer ndeyUtMKc650NEq8sm4bsKaRptthfBuClyVsaesdUvr-DLc1Cllicwv8ruzQGVlG1q7oG5E5qTtnpj73e1f4ggTMekk4KzYkRn2W3RHrjEMao_qGm9HIJX4wt-V2XHYx"
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  //private baseURL: string = "https://api.yelp.com/v3/businesses/search?open_now=true&location=";
  private baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true&location=';
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  sendFetch(input: string): any {
    return this.http.get(`${this.baseURL}${input}`, httpOptions).pipe(
      catchError(this.handleError("sendFetch")),
      tap(data => {
        return data
      })
    )
  }
}
