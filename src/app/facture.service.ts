import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Facture } from './modals/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  
  list: Facture[]; 
  factureByIdUrl:string='http://localhost:8081/SpringMVC/servlet/getfacturebyclient';
  cancelUrl:string='http://localhost:8081/SpringMVC/servlet/cancelfacture';
  factureUrl:string='http://localhost:8081/SpringMVC/servlet/getallfacture';
  
 
   constructor(private route:Router ,  private _http:HttpClient) { }
  
   getFactureById(idfacture:number):Observable<Facture>{
  
    return  this._http.get<Facture>(this.factureUrl+'/'+idfacture);
}
   getFactureList():Observable<Facture[]>{
     return this._http.get<Facture[]>(this.factureUrl);
     
   }
   
  //  cancelFacture (facture: Facture): Observable<Facture> {
  //   const idfacture = typeof facture === 'number' ? facture : facture.idfacture;
  //   const url=this.cancelUrl+'/'+idfacture;
  //   return this._http.delete<Facture>(url);
  //   }
    cancelFacture(idfacture:number, facture: Facture):Observable<Facture>{
      return this._http.put<Facture>(this.factureByIdUrl+'/'+ idfacture, facture , this.httpOptions);
    }                                     
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
}
