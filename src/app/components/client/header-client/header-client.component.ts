import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  inputSearch: string = ''
  categories: ICategory[] = []
  constructor(
    private router: Router,
    private cateService: CategoryService
  ) { }

  ngOnInit(): void {
    this.cateService.getCategories().subscribe(data => this.categories = data)
  }

  onInputSearch(event: any){
    this.inputSearch = event.target.value
  }

  onSearch(){
    this.router.navigateByUrl(`/search?q=${this.inputSearch}`)
  }

}
