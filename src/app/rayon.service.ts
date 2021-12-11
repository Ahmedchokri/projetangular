import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rayon } from './modals/rayon';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  list: Rayon[];
  rayonUrl:string='http://localhost:8089/SpringMVC/servlet/retrieveallrayons';
  rayonByIdUrl:string='http://localhost:8089/SpringMVC/servlet/retrieveRayon';
  deleteUrl:string='http://localhost:8089/SpringMVC/servlet/removeRayon';
  addUrl:string='http://localhost:8089/SpringMVC/servlet/addRayons';
  updateUrl:string='http://localhost:8089/SpringMVC/servlet/modifyRayon';
   constructor(private route:Router ,  private _http:HttpClient) { }
 
   getAllRayon():Observable<Rayon[]>{
     return this._http.get<Rayon[]>(this.rayonUrl);
     
   }
 
   deleteRayon (rayon: Rayon): Observable<Rayon> {
     const idrayon = typeof rayon === 'number' ? rayon : rayon.idrayon;
     const url=this.deleteUrl+'/'+idrayon;
     return this._http.delete<Rayon>(url);
     }
 
     addRayon(rayon:Rayon){
       return this._http.post(this.addUrl,rayon);
 
     }
     getRayonById(idrayon:number):Observable<Rayon>{
   
          return  this._http.get<Rayon>(this.rayonByIdUrl+'/'+idrayon);
     }
     updateRayon( rayon:Rayon):Observable<Rayon>{
       return this._http.put<Rayon>(this.updateUrl, rayon , this.httpOptions);
     }
     httpOptions = {
       headers: new HttpHeaders({
       'Content-Type': 'application/json'
       })
       }
}
