import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchFlightComponent } from './search-flight.component';
import { SearchFlightResultsListComponent } from './search-flight-results-list/search-flight-results-list.component';
@NgModule({
    imports: [
        SharedModule,
       
    ],
    declarations: [
        SearchFlightComponent,
        SearchFlightResultsListComponent

    ],
    exports: [
        SearchFlightComponent,
        SearchFlightResultsListComponent
    ]
    
})

export class SearchFlightModule { }