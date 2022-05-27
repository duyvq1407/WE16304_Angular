import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LayoutAdminComponent } from './pages/layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pages/layout/layout-client/layout-client.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';

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
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
      },
      {
        path: 'user',
        component: UserComponent
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
