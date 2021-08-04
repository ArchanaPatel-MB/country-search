import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service'; 
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public country:any=[]

  constructor(private _countryServices: CountryService) { }

  ngOnInit(): void {
    this._countryServices.getCountries()
      .subscribe(data=> this.country=data)
  
 
      setTimeout(()=>{
        console.log(this.country)
      },8000)
  }

}
