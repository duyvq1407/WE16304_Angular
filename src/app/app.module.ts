import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { LayoutClientComponent } from './pages/layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './pages/layout/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { AdminProductListComponent } from './pages/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin-product/admin-product-detail/admin-product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HeaderClientComponent } from './components/client/header-client/header-client.component';
import { AsideAdminComponent } from './components/admin/aside-admin/aside-admin.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AdminBookListComponent } from './pages/admin-book/admin-book-list/admin-book-list.component';
import { AdminBookFormComponent } from './pages/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookCateListComponent } from './pages/admin-bookCate/admin-book-cate-list/admin-book-cate-list.component';
import { AdminBookCateFormComponent } from './pages/admin-bookCate/admin-book-cate-form/admin-book-cate-form.component';
import { AdminBookCateDetailComponent } from './pages/admin-bookCate/admin-book-cate-detail/admin-book-cate-detail.component';
import { AdminUserListComponent } from './pages/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin-user/admin-user-form/admin-user-form.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowValidateComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    HeaderClientComponent,
    AsideAdminComponent,
    AdminBookListComponent,
    AdminBookFormComponent,
    AdminBookCateListComponent,
    AdminBookCateFormComponent,
    AdminBookCateDetailComponent,
    AdminUserListComponent,
    AdminUserFormComponent,
    FooterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
