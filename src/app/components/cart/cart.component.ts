import { Component, OnInit } from '@angular/core';
import { IProductCart } from 'src/app/models/Product';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : IProductCart[] = [];
  cartItemValues: number = 0;
  constructor(
    private localStorageService: LocalStorageService
    ) { 
  }

  ngOnInit(): void {
    this.onSetCartItems()
    // Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của Local s
    //Hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.localStorageService.watchService().subscribe(data=>{
      this.onSetCartItems()
    })

  }

  onSetCartItems () {
    this.cartItems = this.localStorageService.getItem()
    console.log(this.cartItemValues)
    console.log(this.cartItems)
    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.quantity;
    })
  }
}
