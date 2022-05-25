import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
      path: 'user',
      component: UserComponent, 
      // Nếu có children thì k dùng component để render nữa
      // Nếu vẫn muốn sử dụng component(Khung layout) thì trong component sẽ phải có route-oulet
      children: [
        // {
        //   path: '',
        //   component: UserComponent
        // },
        {
          path: 'signup',
          component: UserFormComponent
        },
        {
          path: 'edit',
          component: UserFormComponent
        },
        {
          path: 'list',
          component: UserListComponent
        }
      ]
    },
    {
      path: 'product',
      component: FormComponent
    }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
