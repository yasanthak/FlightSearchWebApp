import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results';
import { SearchResultsService } from 'src/app/shared/services/apis/search-flight.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  public searchFlightsFormGroup: FormGroup;
  searchResultsDisplayData: FlightSearchResults[] = [];

  constructor( private formBuilder: FormBuilder,
               private searchResultsService: SearchResultsService) { 
    this.createForm();
  }


  private createForm(): void {
    this.searchFlightsFormGroup = this.formBuilder.group({
      departureCode:  ['', [Validators.required,
              Validators.minLength(3),
              Validators.maxLength(3)]],
      arrivalCode:  ['', [Validators.required,
               Validators.minLength(3),
               Validators.maxLength(3)]],
      departureDate : ['', Validators.required],
      arrivalDate : ['', Validators.required]
       
    });

    
}

  ngOnInit() {
  }

  searchFlights(): void {
    if (this.searchFlightsFormGroup.valid) {
     
        const p = this.searchFlightsFormGroup.value;

       console.log(p);

       this.searchResultsService.getFlightResults().subscribe(
         response => {
          this.searchResultsDisplayData = response;
          console.log(this.searchResultsDisplayData);
         }
       )
     
    } else {
      //this.errorMessage = 'Please correct the validation errors.';
    }
  }

}
