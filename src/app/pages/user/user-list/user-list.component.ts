import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: any // Nhận dữ liệu từ cha chứ k quản lý nữa 
  @Output() handlerRemove: EventEmitter<any>;
  @Output() handlerEdit: EventEmitter<any>;
  constructor() { 
    this.handlerRemove = new EventEmitter();
    this.handlerEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onRemove = (userId:number) => {
    this.handlerRemove.emit(userId)
  }
  onEdit = (userId:number) => {
    this.handlerEdit.emit(userId)
  }

}
