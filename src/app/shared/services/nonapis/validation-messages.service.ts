import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public errors = {
    departureCode: {
        required: 'Departure Code is required.',
        minlength: 'Departure Code at least three characters.',
        maxlength: 'Departure Code at least three characters.'
      },
      arrivalCode: {
        required: 'Arrival Code is required.',
        minlength: 'Arrival Code at least three characters.',
        maxlength: 'Arrival Code at least three characters.'
      },
  };

  constructor() { }
}
