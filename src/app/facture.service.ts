import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Facture } from './modals/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  list: Facture[];
 
  factureUrl:string='http://localhost:8089/SpringMVC/servlet/facture/getallfacture';
  //deleteUrl:string='http://localhost:8089/SpringMVC/servlet/removeFournisseur/4';
 
   constructor(private route:Router ,  private _http:HttpClient) { }
 

  //  getAllFournisseurs():Observable<Fournisseur[]>{
  //   return this._http.get<Fournisseur[]>(this.fournisseurUrl);
    
  // }

getAllFacture():Observable<Facture[]>{
  return this._http.get<Facture[]>(this.factureUrl);

}
 
   //deleteFournisseur (facture: Facture): Observable<Facture> {
    // const url=this.deleteUrl+'/'+ facture.idfacture;
    // return this._http.delete<Facture>(url);
    // }
}
