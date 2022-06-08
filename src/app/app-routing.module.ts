import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AdminProductDetailComponent } from './pages/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LayoutAdminComponent } from './pages/layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './pages/layout/layout-client/layout-client.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';
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
    canActivate: [CanAccessAdminGuard], // Đưa vào để kiểm soát việc login trước khi vào admin
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'add',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
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
