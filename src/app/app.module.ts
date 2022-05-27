import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { TableNameComponent } from './components/table/table-name/table-name.component';
import { TableGenderComponent } from './components/table/table-gender/table-gender.component';
import { TableStatusComponent } from './components/table/table-status/table-status.component';
import { TableAvatarComponent } from './components/table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutClientComponent } from './pages/layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './pages/layout/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    TableGenderComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    HeaderComponent,
    HomeComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
