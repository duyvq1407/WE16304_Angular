import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBookCart } from '../models/Book';

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
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    return data
  }

  setItem(addItem: IBookCart ) {
    //1. Cập nhật dữ liệ vào Local
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existItem = cartItems.find((item: IBookCart) => item._id === addItem._id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.serviceSubject.next('')
  }

  removeItem(id: string){
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?')
    if (confirm) {
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      localStorage.setItem('cart', JSON.stringify(cartItems.filter((item: IBookCart) => item._id != id)));
      this.serviceSubject.next('')  
    }
  }

  editQuantityItem(id: string, quantity: number){
    if(quantity < 1){this.removeItem(id); return}
    const cartItems: IBookCart[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemEdit: IBookCart = cartItems.find((item: IBookCart) => item._id == id)!;
    itemEdit.quantity = quantity,
    cartItems.map((item: IBookCart) => {
      if (item._id == itemEdit._id) {
        item = itemEdit
      }
    }),
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.serviceSubject.next('')  
  }
}
