import { NotFoundComponent } from './not-found/not-found.component';
import { SalaryComponent } from './salary/salary.component';
import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  { path: 'employee', component: EmployeesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'department', component: DepartmentsComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
