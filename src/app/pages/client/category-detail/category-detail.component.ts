import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryDetail } from 'src/app/models/Category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit{
  cateDetail: ICategoryDetail = {category: {status: 0}, books: []};
  // id: string = this.route.snapshot.params['id'];

  constructor(
    
    private cateService: CategoryService,
    private bookService: BookService,
    private route : ActivatedRoute,
    private router: Router
  ) { 
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList = () => {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') as string
      this.cateService.getCategory(id).subscribe((data) => {
        this.cateDetail = data
      });
    })
  }
}
