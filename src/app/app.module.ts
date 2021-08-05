import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FilterCountryComponent } from './filter/filter-country/filter-country.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchCountryComponent } from './search/search-country/search-country.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { CountryDetailsComponent } from './CountryDetails/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterCountryComponent,
    AllCountriesComponent,
    
    FilterPipePipe,
    SearchCountryComponent,
    SearchPipePipe,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
