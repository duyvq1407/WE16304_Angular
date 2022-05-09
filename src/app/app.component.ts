import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WE16304_Angular';
  name = 'Duyvqph18088';
  age = '18';
  students = [
    {
      id: 'ph1',
      name: 'Student 1',
      status: 0
    },
    {
      id: 'ph2',
      name: 'Student 2',
      status: 1
    },
    {
      id: 'ph3',
      name: 'Student 3',
      status: 0
    },
  ]
}
