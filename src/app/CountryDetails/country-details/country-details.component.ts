import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  [x: string]: any;
 
  public country:any=[]
  countryName: any;

  constructor(private _countryServices: CountryService, private route:ActivatedRoute,private router:Router, private _location: Location) { }

  ngOnInit(): void {
    this._countryServices.getCountries()
      .subscribe(data=> this.country=data)

    let details=this.route.snapshot.paramMap.get('name')
    this.countryName=details
    
  }

  back(){
    this._location.back()
  }
}
