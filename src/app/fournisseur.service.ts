import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  Fournisseur } from './modals/fournisseur';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
 list: Fournisseur[];
 fournisseurUrl:string='http://localhost:8089/SpringMVC/servlet/retrieveallfournisseurs';
 fournisseurByIdUrl:string='http://localhost:8089/SpringMVC/servlet/retrieveFournisseur';
 deleteUrl:string='http://localhost:8089/SpringMVC/servlet/removeFournisseur';
 addUrl:string='http://localhost:8089/SpringMVC/servlet/addFournisseurs';
 updateUrl:string='http://localhost:8081/SpringMVC/servlet/modifyFournisseur';
  constructor(private route:Router ,  private _http:HttpClient) { }

  getAllFournisseurs():Observable<Fournisseur[]>{
    return this._http.get<Fournisseur[]>(this.fournisseurUrl);
    
  }

  deleteFournisseur (fournisseur: Fournisseur): Observable<Fournisseur> {
    const idfournisseur = typeof fournisseur === 'number' ? fournisseur : fournisseur.idfournisseur;
    const url=this.deleteUrl+'/'+idfournisseur;
    return this._http.delete<Fournisseur>(url);
    }

    addFournisseur(fournisseur:Fournisseur){
      return this._http.post(this.addUrl,fournisseur);

    }

    
    getFournisseurById(idfournisseur):Observable<Fournisseur>{
      return this._http.get<Fournisseur>(this.fournisseurByIdUrl+'/'+idfournisseur).pipe(catchError((err)=>{
        console.error(err);
        return throwError(err);
      }))
      ;

    }
    // getFournisseurById(idfournisseur:number):Observable<Fournisseur>{
  
    //      return  this._http.get<Fournisseur>(this.fournisseurUrl+'/'+idfournisseur);
    // }
    updateFournisseur(fournisseur:Fournisseur):Observable<Fournisseur>{
      return this._http.put<Fournisseur>(this.updateUrl, fournisseur,this.httpOptions);
    }
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
      }
}
