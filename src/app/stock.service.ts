import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from './modals/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
   
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  getStockList(): Observable<Stock[]> {  
    return this.http.get<Stock[]>("http://localhost:8081/SpringMVC/servlet/getAllStock");  
  }  

  deleteStock (ry: Stock | number): Observable<Stock> {
    const id = typeof ry === 'number' ? ry : ry.idstock;
    const url="http://localhost:8081/SpringMVC/servlet/removestock/"+id;
    return this.http.delete<Stock>(url);
    }
    updateStock(sto:Stock):Observable<Stock>{
      return this.http.put<Stock>("http://localhost:8081/SpringMVC/servlet/modifystock",sto);

     }
    addStock (Stock: object): Observable<object> {  
      return this.http.post('http://localhost:8081/SpringMVC/servlet/addStock', Stock);  }
}
