import { EmployeeList } from 'src/app/data-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }
 
  getEmployeesById(id: number) {
    return this.http.get(`${this.SERVER_URL}employees/${id}`);
  }
  creatEmployees(employee: EmployeeList) {
    return this.http.post(`${this.SERVER_URL}employees`, employee);
  }
  updateEmployee(employee: EmployeeList) {
    return this.http.put(`${this.SERVER_URL}employees/${employee.id}`, employee)
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.SERVER_URL}employees/${id}`)
  }
}
