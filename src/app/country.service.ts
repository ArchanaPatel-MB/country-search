import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url:string='https://restcountries.eu/rest/v2/all'

  

  constructor( private http:HttpClient) { }

  getCountries(): Observable<any>{
    return this.http.get<any>(this._url)
  }

 
}
