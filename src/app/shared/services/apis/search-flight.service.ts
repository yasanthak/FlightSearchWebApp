import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { FlightSearchResults } from 'src/app/shared/models/flight-search-results'

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  private searchResultsUrl = 'http://nmflightapi.azurewebsites.net/api/flight';

  constructor(private http: HttpClient) { }

  getFlightResults(): Observable<FlightSearchResults[]> {
    return this.http.get<FlightSearchResults[]>(this.searchResultsUrl)
    //   .pipe(
    //     tap(data => console.log(JSON.stringify(data)))
       
    //   );
  }

}