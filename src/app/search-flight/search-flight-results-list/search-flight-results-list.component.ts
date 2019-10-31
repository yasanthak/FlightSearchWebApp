import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results';

@Component({
  selector: 'app-search-flight-results-list',
  templateUrl: './search-flight-results-list.component.html',
  styleUrls: ['./search-flight-results-list.component.scss']
})
export class SearchFlightResultsListComponent implements OnInit {

 
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

    
    this.searchResultsFormGroup.controls['filterResults'].valueChanges.subscribe(value => {
      if(value !== '') {
        this.filterValue = value;
       // this.serachResultsFilter(this.filterValue);
      }
     
   
     
    });

  }

  serachResultsFilter(filterBy: string) {

    this.fLightSearchDetails =  this.fLightSearchDetails.filter(flight => {
     flight.airlineName.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
    
    })
    
    return this.fLightSearchDetails;
   
  }


}
