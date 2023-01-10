import { EmployeeList } from './employees/employees';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.SERVER_URL + 'employees');
  }
  getCompany() {
    return this.http.get(this.SERVER_URL + 'companies')
  }
  getDepartment() {
    return this.http.get(this.SERVER_URL + 'departments')
  }
  getSalary() {
    return this.http.get(this.SERVER_URL + 'salaries')
  }
}
