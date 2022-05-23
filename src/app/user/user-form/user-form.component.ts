import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any;
  // 1. Định nghĩa sư kiện để bắn dữ liệu ngược lại
  @Output() handlerSubmit: EventEmitter<any>;
  constructor() { 
    // 2. Khai báo giá trị default
    this.handlerSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onSubmit = (userForm: NgForm) => { 
    //3. Gửi dữ liệu đi
    this.handlerSubmit.emit(userForm.value)
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: ''
    })      
  }
}
