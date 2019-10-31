import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightComponent } from './search-flight.component';
import { SearchFlightResultsListComponent } from './search-flight-results-list/search-flight-results-list.component';
import { SearchResultsService } from 'src/app/shared/services/apis/search-flight.service';
import { FlightSearchResults } from '../shared/models/export';
import { of } from 'rxjs';

describe('SearchFlightComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;
  let searchResultsService : SearchResultsService;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFlightComponent, SearchFlightResultsListComponent],

      imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule

      ],
      providers: [SearchResultsService, { provide: FormBuilder, useValue: formBuilder }]
    })
      .compileComponents();
  }));

  beforeEach(inject([SearchResultsService], s => {
    searchResultsService = s;
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;

    component.searchFlightsFormGroup = formBuilder.group({
      departureCode: [''],
      arrivalCode: ['',],
      departureDate: [''],
      arrivalDate: ['']
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call searchFlights and return list of Flights Results", async(() => {
    const response: FlightSearchResults[] = [];
  
    spyOn(searchResultsService, 'getFlightResults').and.returnValue(of(response))
  
    component.searchFlights();
  
    fixture.detectChanges();
  
    expect(component.searchResultsDisplayData).toEqual(response);
  }));

});
