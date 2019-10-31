import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FlightSearchRequest, FlightSearchResults } from 'src/app/shared/models/export';



@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private searchResultsUrl = 'http://nmflightapi.azurewebsites.net/api/flight';

  constructor(private http: HttpClient) { }

  getFlightResults(searchParam:FlightSearchRequest): Observable<FlightSearchResults[]> {
     
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