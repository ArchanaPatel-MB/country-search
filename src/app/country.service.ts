import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _url:string='https://restcountries.eu/rest/v2/all'

  public _subject = new BehaviorSubject<any>('');


  constructor( private http:HttpClient) { }

  emit<T>(data: any) {
    this._subject.next(data);
  }
  on<T>(): Observable<T> {
    return this._subject.asObservable()
  }

  getCountries(): Observable<any>{
    return this.http.get<any>(this._url)
  }

 
}
