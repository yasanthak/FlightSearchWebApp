import { Component, OnInit,Input } from '@angular/core';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results';

@Component({
  selector: 'app-search-flight-results-list',
  templateUrl: './search-flight-results-list.component.html',
  styleUrls: ['./search-flight-results-list.component.scss']
})
export class SearchFlightResultsListComponent implements OnInit {

  @Input() fLightSearchDetails: FlightSearchResults;
  constructor() { }

  ngOnInit() {
  }

}
