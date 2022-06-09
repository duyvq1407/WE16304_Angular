import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private cateService: CategoryService,
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
