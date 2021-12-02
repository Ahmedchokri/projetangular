import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Facture } from './modals/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseUrl = 'http://localhost:8089/SpringMVC/servlet/'; 
  list: Facture[]; 
  factureByIdUrl:string='http://localhost:8089/SpringMVC/servlet/getfacturebyclient';
  cancelUrl:string='http://localhost:8089/SpringMVC/servlet/cancelfacture';
  factureUrl:string='http://localhost:8089/SpringMVC/servlet/getallfacture';
  
 
   constructor(private route:Router ,  private _http:HttpClient) { }
  
   getFactureById(idfacture:number):Observable<Facture>{
  
    return  this._http.get<Facture>(this.factureUrl+'/'+idfacture);
}
   getFactureList():Observable<Facture[]>{
     return this._http.get<Facture[]>(this.factureUrl);
     
   }
   
 

    cancelFacture(Facture: Facture | number): Observable<Facture> {
      const id = typeof  Facture === 'number' ? Facture : Facture.idfacture;
      const url="http://localhost:8089/SpringMVC/servlet/cancelfacture"+'/'+id;
      return this._http.put<Facture>(url,Facture);
    }
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
    
      addFacture(Facture: object): Observable<object> {
       
        return this._http.post<Facture>('http://localhost:8089/SpringMVC/servlet/addfacture',Facture);
      }
      createF(Facture: object): Observable<object> {  
        return this._http.post(`${this.baseUrl}`+'addfacture', Facture);  
      } 
   
}