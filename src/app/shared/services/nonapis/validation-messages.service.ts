import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public errors = {
    departureCode: {
        required: 'Departure Code is required.',
        minlength: 'Departure Code at least three characters.',
        pattern : 'Depature Code accepts alphanumeric only'
       
      },
      arrivalCode: {
        required: 'Arrival Code is required.',
        minlength: 'Arrival Code at least three characters.',
        pattern : 'Arrival Code accepts alphanumeric only '
       
      },
  };

  constructor() { }
}
