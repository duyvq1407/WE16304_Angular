import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: IProduct[];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
    ) { 
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
  onUpdatedStatus(newStatus: number,id: string){
    this.productService.editProduct({status: newStatus}, id).subscribe(()=>{
      this.onGetList()
    })
  }
  onRemoveItem = (id: string) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm && id) {
      this.toastr.success("Xóa thành công")
      // call api xoa
      this.productService.removeProduct(id).subscribe(() => {
        // reRender
        this.onGetList();
      });
    }
  }

}
