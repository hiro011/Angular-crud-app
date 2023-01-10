import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let companies = [
      { id: 1, name: 'company1', regDate: new Date('08-jan-2023') },
      { id: 2, name: 'company2', regDate: new Date('08-jan-2023') },
      { id: 3, name: 'company3', regDate: new Date('08-jan-2023') },
      { id: 4, name: 'company4', regDate: new Date('08-jan-2023') },
    ];
    let departments = [
      { id: 1, name: 'department1', companyId: 1, regDate: new Date('08-jan-2023') },
      { id: 2, name: 'department2', companyId: 1, regDate: new Date('08-jan-2023') },
      { id: 3, name: 'department3', companyId: 2, regDate: new Date('08-jan-2023') },
      { id: 4, name: 'department4', companyId: 2, regDate: new Date('08-jan-2023') },
      { id: 5, name: 'department5', companyId: 3, regDate: new Date('08-jan-2023') },
      { id: 6, name: 'department6', companyId: 3, regDate: new Date('08-jan-2023') },
    ];
    let salaries = [
      { id: 1, amount: 500, regDate: new Date('08-jan-2023') },
      { id: 2, amount: 400, regDate: new Date('08-jan-2023') },
      { id: 3, amount: 600, regDate: new Date('08-jan-2023') },
      { id: 4, amount: 800, regDate: new Date('08-jan-2023') },
    ];
    let employees = [
      {
        id: 1,
        Ename: 'Ahmed',
        companyId: 1,
        departmentId: 2,
        salaryId: 1,
        regDate: new Date('06-jan-2023'),
      },
      {
        id: 2,
        Ename: 'mehamed',
        companyId: 2,
        departmentId: 3,
        salaryId: 1,
        regDate: new Date('06-jan-2023'),
      },
      {
        id: 3,
        Ename: 'seid',
        companyId: 1,
        departmentId: 1,
        salaryId: 2,
        regDate: new Date('07-jan-2023'),
      },
      {
        id: 4,
        Ename: 'yesuf',
        companyId: 2,
        departmentId: 4,
        salaryId: 2,
        regDate: new Date('07-jan-2023'),
      }
    ];
    return { companies, departments, salaries, employees }
  }

}
