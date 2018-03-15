import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Country } from './Models/Country';

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountry(id: number): Observable<Country> {
    return this.http.get<Country>('/api/Countries/GetCountry?Id=' + id);
  }

  getCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('/api/Countries/GetCountries');
  }

}
