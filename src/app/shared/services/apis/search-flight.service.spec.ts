import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { SearchResultsService } from './search-flight.service';
import { FlightSearchResults } from 'src/app/shared/models/flight-search-results'
import { FlightSearchRequest } from 'src/app/shared/models/flight-search-request'

 

describe('SearchResultsService Tests', () => {

    let searchResultsService: SearchResultsService;
    let httpTestingController: HttpTestingController;
    
  
    let testSearchResults: FlightSearchResults[] = [
        {
          airlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif",
          airlineName: "China Southern Airlines",
          inboundFlightsDuration: "24:10",
          itineraryId: 1,
          outboundFlightsDuration: "26:20",
          stops: 2,
          totalAmount: "2903.84"
        },
        {
          airlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif",
          airlineName: "Emirates Airline",
          inboundFlightsDuration: "42:55",
          itineraryId: 2,
          outboundFlightsDuration: "25:40",
          stops: 2,
          totalAmount: "2954.14"
        }
      ]


      let searchparam:FlightSearchRequest = {
        departureCode: 'MEL',
        arrivalCode: 'SYD',
        departureDate: new Date(2019,10,1),
        arrivalDate: new Date(2019,10,2)
      }

      beforeEach(() => {

        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ],
          providers: [ SearchResultsService ]
        });
    
        searchResultsService = TestBed.get(SearchResultsService);
        httpTestingController = TestBed.get(HttpTestingController);
      });

      afterEach(() => {
        httpTestingController.verify();
      });


      it('should GET all SearchResults', () => {
        searchResultsService.getFlightResults(searchparam)
          .subscribe((data: FlightSearchResults[]) => {
            expect(data.length).toBe(2);
          });
    
        let searchRequest: TestRequest = httpTestingController.expectOne('http://nmflightapi.azurewebsites.net/api/flight');
        expect(searchRequest.request.method).toEqual('GET');
    
        searchRequest.flush(testSearchResults);
      });
      

});