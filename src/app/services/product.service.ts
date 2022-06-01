import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Khai bào http để có đối tượng httpCLient tương tác với các phương thức API
  constructor(private http:HttpClient) { }

  getProducts = ():Observable<IProduct[]> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<IProduct[]>(environment.products)
  }
  removeProduct = (id: string):Observable<IProduct> => { // Observable giúp lắng nghe API trả về kq
    return this.http.delete<IProduct>(`${environment.products}/${id}`)
  }
  readProduct = (id: string):Observable<IProduct> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<IProduct>(`${environment.products}/${id}`)
  }
  addProduct = (product: IProduct):Observable<IProduct> => {
    return this.http.post<IProduct>(`${environment.products}`, product)
  }
  editProduct = (product: IProduct, id: string):Observable<IProduct> => {
    return this.http.put<IProduct>(`${environment.products}/${id}`, product)
  }
}
