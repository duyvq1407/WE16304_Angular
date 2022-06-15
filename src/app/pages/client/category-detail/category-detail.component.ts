import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryDetail } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, AfterContentInit {
  cateDetail: ICategoryDetail = {category: {status: 0}, books: []};
  id: string = this.route.snapshot.params['id'];

  constructor(
    
    private cateService: CategoryService,
    private bookService: BookService,
    private route : ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.onGetList(this.id)
  }

  ngAfterContentInit() {
  }
  onGetList = (id:string) => {
    this.cateService.getCategory(id).subscribe((data) => {
      this.cateDetail = data
      console.log(data)
    });
  }
}
