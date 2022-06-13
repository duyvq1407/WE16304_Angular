import { Component, OnInit } from '@angular/core';
import { IBookCart } from 'src/app/models/Book';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: IBookCart[] = [];
  totalPrice: number = 0
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.localStorageService.getItem()
    this.cartItems.map(item => this.totalPrice += this.onToTalPrice(item.price!, item.quantity!,item.sale_price!))
  }

  onToTalPrice(price: number, quantity: number, sale: number) : number{
    return price * quantity * ((100 - sale)/100)
  }
  onRemoveItem(id: string){
    this.localStorageService.removeItem(id)
    this.totalPrice = 0
    this.ngOnInit()
  }
  onEditCart( event: any, id: string){
    // console.log(id, event.target.value)
    this.localStorageService.editQuantityItem(id, event.target.value as number)
    this.totalPrice = 0
    this.ngOnInit()

  }
  onChange(event: any){
    console.log(event.target.value)
  }

}
