import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface myData {
//   obj: Array<Object>
// }

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { }

  getEmployees() {
    // return this.employeeList
    // return this.http.get<myData>('/api/file.php')
    // return this.http.get<myData>('http://localhost:1234/api/file.php')
    return this.http.get(this.SERVER_URL + 'employee')
  }
  getCompany() {
    return this.http.get(this.SERVER_URL + 'company')
  }
  getDepartment() {
    return this.http.get(this.SERVER_URL + 'department')
  }
  getSalary() {
    return this.http.get(this.SERVER_URL + 'salary')
  }
  creatEmployees() {

  }
}
