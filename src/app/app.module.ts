import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SharedModule } from './shared/shared.module';
import { SearchFlightResultsListComponent } from './search-flight/search-flight-results-list/search-flight-results-list.component';
import { SearchFlightModule} from './search-flight/search-flight.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   // SearchFlightComponent,
   // SearchFlightResultsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    SearchFlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
