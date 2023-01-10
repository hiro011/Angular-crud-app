import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentList } from 'src/app/data-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }
 
  getDepartmentById(id: number) {
    return this.http.get(`${this.SERVER_URL}departments/${id}`);
  }
  creatDepartment(department: DepartmentList) {
    return this.http.post(`${this.SERVER_URL}departments`, department);
  }
  updateDepartment(department: DepartmentList) {
    return this.http.put(`${this.SERVER_URL}departments/${department.id}`, department)
  }
  deleteDepartment(id: number) {
    return this.http.delete(`${this.SERVER_URL}departments/${id}`)
  }
}
