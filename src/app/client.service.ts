import { Injectable } from '@angular/core';
import { Client } from './modals/client';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  list:Client[];
  client:Client;
  clientsUrl:string='/api/retrieveClients';
  clientDelUrl:string='/api/removeClients';
  clientAddUrl:string='/api/addClients';
  clientUpdateUrl:string='/api/updateClients';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }


  constructor(private _http:HttpClient) { }

  getClient():Observable<Client[]>{
    return this._http.get<Client[]>(this.clientsUrl);
  }
  addclient(client:Client):Observable<Object>{
    return this._http.post(this.clientAddUrl,client);
  }
  deleteClient (clientId:number): Observable<Client> {
    
    const url=this.clientDelUrl+'/'+clientId;
    return this._http.delete<Client>(url);
    
   }
   consulterClient(id:number):Observable<Client> {
    return this._http.get<Client>(this.clientsUrl+'/'+id);
    
  }
   updateClient(c :Client):Observable<Client>{
    console.log(c);
    //this.deleteClient(c);
    //this.addClient(c);
   
    
    return this._http.put<Client>(this.clientUpdateUrl+'/'+c.idClient,c,this.httpOptions);

  }
}
