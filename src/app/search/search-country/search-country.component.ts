import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {
  public country:any=[];
  searchCountry:string='';
  filteredCountry: string='';
  constructor(private router: Router, private route: ActivatedRoute, private _countryServices: CountryService) { }

  ngOnInit(): void {
    this._countryServices.getCountries()
      .subscribe(data=> this.country=data)
  
 
  }
  onClickSearch(searchCountry:string){
    this.searchCountry=searchCountry
  }
  onclick(countryName:any){

    this.router.navigateByUrl("countryDetails",countryName);

  }
  Update(value : string)
{
     this.filteredCountry = value;
     console.log(this.filteredCountry)
}

}
