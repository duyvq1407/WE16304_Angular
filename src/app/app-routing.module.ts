import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBookFormComponent } from './pages/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookListComponent } from './pages/admin-book/admin-book-list/admin-book-list.component';
import { AdminBookCateDetailComponent } from './pages/admin-bookCate/admin-book-cate-detail/admin-book-cate-detail.component';
import { AdminBookCateFormComponent } from './pages/admin-bookCate/admin-book-cate-form/admin-book-cate-form.component';
import { AdminBookCateListComponent } from './pages/admin-bookCate/admin-book-cate-list/admin-book-cate-list.component';
import { AdminUserFormComponent } from './pages/admin-user/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './pages/admin-user/admin-user-list/admin-user-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LayoutAdminComponent } from './pages/layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pages/layout/layout-client/layout-client.component';
import { CanAccessAdminGuard } from './services/guards/can-access-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      {
        path: 'account',
        // Nếu có children thì k dùng component để render nữa
        // Nếu vẫn muốn sử dụng component(Khung layout) thì trong component sẽ phải có route-oulet
        children: [
          {
            path: 'signup',
            component: RegisterComponent
          },
          {
            path: 'signin',
            component: LoginComponent
          },
        ]
      },
      
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [CanAccessAdminGuard], // Đưa vào để kiểm soát việc login trước khi vào admin
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books'
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: AdminBookCateListComponent
          },
          {
            path: 'add',
            component: AdminBookCateFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminBookCateFormComponent
          },
          {
            path: ':id',
            component: AdminBookCateDetailComponent
          }
        ]
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            component: AdminBookListComponent
          },
          {
            path: 'add',
            component: AdminBookFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminBookFormComponent
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          },
          {
            path: 'add',
            component: AdminUserFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminUserFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
