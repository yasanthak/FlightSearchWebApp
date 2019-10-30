import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightResultsListComponent } from './search-flight-results-list.component';

describe('SearchFlightResultsListComponent', () => {
  let component: SearchFlightResultsListComponent;
  let fixture: ComponentFixture<SearchFlightResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
