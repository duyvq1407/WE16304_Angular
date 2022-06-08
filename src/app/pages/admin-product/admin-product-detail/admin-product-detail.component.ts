import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductCart } from 'src/app/models/Product';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  detailProduct: IProduct;
  cartItemValue: number = 1;
  constructor(
    private productService: ProductService,
    private route : ActivatedRoute,
    private localStorageService: LocalStorageService
    ) { 
      this.detailProduct = {
        _id: '',
        name: '',
        image: '',
        price: 0,
        status: 0
      }
    }

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.params['id'];
    this.productService.readProduct(idFromUrl).subscribe((data) => {
      this.detailProduct = data
      console.log(this.detailProduct)
    })
  }

  onInputValue = (event: any) => {
    this.cartItemValue = event.target.value
  }

  onAddToCart = () => {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.detailProduct._id,
      name: this.detailProduct.name,
      price: this.detailProduct.price,
      image: this.detailProduct.image,
      quantity: +this.cartItemValue
    };
    this.localStorageService.setItem(addItem)
    // 2. Kiểm tra xem đã có sp này trong giỏ hàng chưa
    // // 2.1 Lấy ra toàn bộ sp trong giỏ
    // const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // // 2.2 Tìm phần tử trong giỏ có id === addItem.id
    // const existItem = cartItems.find((item: IProductCart) => item._id === addItem._id);
    // // 3. Nếu không có thì push luôn vào làm phần tử mới
    // if (!existItem) {
    //   cartItems.push(addItem);
    // } else {
    //   // 3.1 Nếu đã có thì cập nhật số lượng mới = số lượng cũ + thêm
    //   existItem.value += addItem.value;
    // }
    // // 4. Cập nhật dữ liệu giỏ hàng
    // localStorage.setItem('cart', JSON.stringify(cartItems));
    // 5. Cập nhật lại giá trị cho ô input value
    this.cartItemValue = 1;

  }

}
