import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: IProduct[];
  constructor(private productService: ProductService) { 
    this.products = []
  }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList = () => {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    });
  }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      // call api xoa
      this.productService.removeProduct(id).subscribe(() => {
        // reRender
        this.onGetList();
      });
    }
  }

}
