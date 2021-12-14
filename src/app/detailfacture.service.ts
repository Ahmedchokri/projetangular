import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detailfacture } from './modals/detailfacture';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailfactureService {

  
  list: Detailfacture[];
  private baseUrl = 'http://localhost:8089/SpringMVC/servlet/'; 
  httpOptions = { headers: new HttpHeaders({
    'Content-Type': 'application/json'})}
  constructor(private _http: HttpClient) { }
  getDetailFactureById(id: number): Observable<Detailfacture> {
    const url="http://localhost:8089/SpringMVC/servlet/getdetailfacturebyfacture"+'/'+id;
    return this._http.get<Detailfacture>(url);
  }
}
