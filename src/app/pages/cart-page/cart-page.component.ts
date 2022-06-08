import { Component, OnInit } from '@angular/core';
import { IProductCart } from 'src/app/models/Product';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: IProductCart[] = [];
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.localStorageService.getItem()
    console.log(this.cartItems)
  }

}
