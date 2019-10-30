import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { FlightSearchResults } from 'src/app/shared/models/flight-search-results'
import { FlightSearchRequest } from 'src/app/shared/models/flight-search-request'


@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private searchResultsUrl = 'http://nmflightapi.azurewebsites.net/api/flights';

  constructor(private http: HttpClient) { }

  getFlightResults(searchParam:FlightSearchRequest): Observable<FlightSearchResults[]> {
      console.log(searchParam);
    return this.http.get<FlightSearchResults[]>(this.searchResultsUrl)
       .pipe(
        catchError(this.handleHttpError)
       
       );
  }

  private handleHttpError(err) {
   
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
       errorMessage = `An error occurred: ${err.error.Message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.error.Message}`;
    }
    return throwError(errorMessage);
  }

}