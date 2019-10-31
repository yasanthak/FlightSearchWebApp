import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results';

@Component({
  selector: 'app-search-flight-results-list',
  templateUrl: './search-flight-results-list.component.html',
  styleUrls: ['./search-flight-results-list.component.scss']
})
export class SearchFlightResultsListComponent implements OnInit {

  flightResultsAvailable = false;
  dispalaySearchResults : FlightSearchResults[];
  @Input() fLightSearchDetails: FlightSearchResults[];
  public searchResultsFormGroup: FormGroup;
  public filterValue = '';
  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  private createForm(): void {
    this.searchResultsFormGroup = this.formBuilder.group({
      filterResults: ''
    });
  }

  ngOnInit() {

    
    
    this.searchResultsFormGroup.controls['filterResults'].valueChanges
    .pipe(
      debounceTime(800)
      ).subscribe(value => {
      if(value !== '') {
        this.filterValue = value;
        this.dispalaySearchResults =  [...this.fLightSearchDetails]; 
        this.serachResultsFilter(this.filterValue);
      } else {
         this.fLightSearchDetails = this.dispalaySearchResults;
      }
      
     
    });

  }

  serachResultsFilter(filterBy: string) {
 
    this.fLightSearchDetails =  this.dispalaySearchResults.filter(flight  =>  
     flight.AirlineName.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
     this.flightResultsAvailable = true;
     return this.fLightSearchDetails;
   
  }


}
