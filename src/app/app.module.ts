import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterCountryComponent } from './filter/filter-country/filter-country.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterCountryComponent,
    AllCountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
