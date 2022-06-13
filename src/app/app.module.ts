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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/client/auth/login/login.component';
import { RegisterComponent } from './pages/client/auth/register/register.component';
import { HeaderClientComponent } from './components/client/header-client/header-client.component';
import { AsideAdminComponent } from './components/admin/aside-admin/aside-admin.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AdminBookListComponent } from './pages/admin/admin-book/admin-book-list/admin-book-list.component';
import { AdminBookFormComponent } from './pages/admin/admin-book/admin-book-form/admin-book-form.component';
import { AdminBookCateListComponent } from './pages/admin/admin-bookCate/admin-book-cate-list/admin-book-cate-list.component';
import { AdminBookCateFormComponent } from './pages/admin/admin-bookCate/admin-book-cate-form/admin-book-cate-form.component';
import { AdminBookCateDetailComponent } from './pages/admin/admin-bookCate/admin-book-cate-detail/admin-book-cate-detail.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { StatusComponent } from './components/status/status.component';
import { FooterClientComponent } from './components/client/footer-client/footer-client.component';
import { HomeComponent } from './pages/client/home/home.component';
import { AccountComponent } from './pages/client/account/account.component';
import { CategoryDetailComponent } from './pages/client/category-detail/category-detail.component';
import { BookDetailComponent } from './pages/client/book-detail/book-detail.component';
import { CartComponent } from './components/client/cart/cart.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    ShowValidateComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
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
    FooterAdminComponent,
    StatusComponent,
    FooterClientComponent,
    HomeComponent,
    AccountComponent,
    CategoryDetailComponent,
    BookDetailComponent,
    CartComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
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
