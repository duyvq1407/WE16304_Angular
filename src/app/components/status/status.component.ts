import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/Auth';
import { ICategory } from 'src/app/models/Category';
import { IProduct } from 'src/app/models/Product';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() x: IProduct | IUser | ICategory = {};
  @Input() id: string = ''

  constructor(
    private cateService: CategoryService,
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  onUpdatedStatus(newStatus: number){
    this.x.status = newStatus;
    this.bookService.editBook({ status: newStatus}, this.id).subscribe()
    this.cateService.editCategory({ status: newStatus}, this.id).subscribe()
    this.userService.editUsers({ status: newStatus}, this.id).subscribe()
  }
}
