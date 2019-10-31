import { Component, OnInit , AfterViewInit, OnDestroy, ViewChildren, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControlName } from '@angular/forms';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results';
import { SearchResultsService } from 'src/app/shared/services/apis/search-flight.service';
import { GenericValidator } from '../shared/generic-validator';
import { ValidationService } from '../shared/services/nonapis/validation-messages.service';

import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit,AfterViewInit {
 
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  errorMessage: string;
  public searchFlightsFormGroup: FormGroup;
  searchResultsDisplayData: FlightSearchResults[] = [];
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor( private formBuilder: FormBuilder,
               private searchResultsService: SearchResultsService,
               private validationService: ValidationService) { 
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
      departureDate : [''],
      arrivalDate : ['']
       
    });

    this.validationMessages = this.validationService.errors;
    this.genericValidator = new GenericValidator(this.validationMessages);
    
}

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
      const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
   
    merge(this.searchFlightsFormGroup.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.searchFlightsFormGroup);
    });
  }

 

  searchFlights(): void {
    if (this.searchFlightsFormGroup.valid) {
     
        const searchParam = this.searchFlightsFormGroup.value;

         this.searchResultsService.getFlightResults(searchParam).subscribe(
         response => {
          this.searchResultsDisplayData = response;
          this.searchFlightsFormGroup.reset();
        
         },(err: any) => console.log(err)
       )
     
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

}
