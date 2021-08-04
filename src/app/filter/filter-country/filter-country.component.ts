import { CountryService } from './../../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-country',
  templateUrl: './filter-country.component.html',
  styleUrls: ['./filter-country.component.css']
})
export class FilterCountryComponent implements OnInit {

  public country:any=[]

  constructor( private _countryServices: CountryService) { }

  ngOnInit(): void {
    this._countryServices.getCountries()
      .subscribe(data=> this.country=data)
  
 
      setTimeout(()=>{
        console.log(this.country)
      },8000)
  }
  

}
