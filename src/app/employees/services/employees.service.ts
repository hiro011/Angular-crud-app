import { EmployeeList } from 'src/app/data-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interface myData {
//   obj: Array<Object>
// }

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { }
 
  creatEmployees(employee : EmployeeList) {
    return this.http.post(`${this.SERVER_URL + 'employee'}`, employee)
  }
  deleteEmployee(Eid: number){
    return this.http.delete(`${this.SERVER_URL + 'employee'}/${Eid}`)
  }
  updateEmployee(employee: EmployeeList){
    return this.http.put(`${this.SERVER_URL + 'employee'}/${employee.Eid}`, employee)
  }
}
