import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightComponent } from './search-flight.component';
import { SearchFlightResultsListComponent } from './search-flight-results-list/search-flight-results-list.component';
import { SearchResultsService } from 'src/app/shared/services/apis/search-flight.service';

describe('SearchFlightComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;

    component.searchFlightsFormGroup = formBuilder.group({
      departureCode: [''],
      arrivalCode: ['',],
      departureDate: [''],
      arrivalDate: ['']
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
