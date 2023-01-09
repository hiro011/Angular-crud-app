import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DepartmentsComponent } from './departments/departments.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SalaryComponent } from './salary/salary.component';
import { CompanyComponent } from './company/company.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees/services/employees.service';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { FormsModule } from '@angular/forms';
import { ViewService } from './view.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NotFoundComponent,
    DepartmentsComponent,
    SalaryComponent,
    CompanyComponent,
    NavBarComponent,
    NewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    FormsModule
  ],
  providers: [ViewService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
