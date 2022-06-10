import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  categories: ICategory[] = []
  constructor(
    private cateService: CategoryService
  ) { }

  ngOnInit(): void {
    this.cateService.getCategories().subscribe(data => this.categories = data)
  }

}
