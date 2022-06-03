import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  detailProduct: IProduct;
  constructor(
    private productService: ProductService,
    private route : ActivatedRoute
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

}
