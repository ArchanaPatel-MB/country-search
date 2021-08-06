import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './CountryDetails/country-details/country-details.component';
import { SearchCountryComponent } from './search/search-country/search-country.component';
const routes: Routes = [

{
  path:"",
  component: SearchCountryComponent
},

{
  path:"countryDetails/:name",
  component:CountryDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
