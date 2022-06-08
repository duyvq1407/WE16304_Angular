import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProductCart } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  private serviceSubject = new Subject<string>(); // vừa giống Observable có thế lắng nghe được,  vừa phát được sự kiên để lắng nghe

  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  setItem(addItem: IProductCart) {
    //1. Cập nhật dữ liệ vào Local
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existItem = cartItems.find((item: IProductCart) => item._id === addItem._id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.serviceSubject.next('')
  }
}
