import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  productsFilter(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/search`, body);
  }
  productBySellerName(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/productsBySellerName`, body);
  }
  getStats(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/stats`);
  }
}
