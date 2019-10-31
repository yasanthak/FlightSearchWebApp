import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { SearchResultsService } from './search-flight.service';
import { FlightSearchRequest, FlightSearchResults } from 'src/app/shared/models/export';

 

describe('SearchResultsService Tests', () => {

    let searchResultsService: SearchResultsService;
    let httpTestingController: HttpTestingController;
    
  
    let testSearchResults: FlightSearchResults[] = [
        {
          AirlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif",
          AirlineName: "China Southern Airlines",
          InboundFlightsDuration: "24:10",
          ItineraryId: 1,
          OutboundFlightsDuration: "26:20",
          Stops: 2,
          TotalAmount: "2903.84"
        },
        {
          AirlineLogoAddress: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif",
          AirlineName: "Emirates Airline",
          InboundFlightsDuration: "42:55",
          ItineraryId: 2,
          OutboundFlightsDuration: "25:40",
          Stops: 2,
          TotalAmount: "2954.14"
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