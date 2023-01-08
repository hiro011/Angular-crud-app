import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let company = [
      { id: 1, name: 'company1', regDate: new Date('08-jan-2023') },
      { id: 2, name: 'company2', regDate: new Date('08-jan-2023') },
      { id: 3, name: 'company3', regDate: new Date('08-jan-2023') },
      { id: 4, name: 'company4', regDate: new Date('08-jan-2023') },
    ];
    let department = [
      { id: 1, name: 'department1', regDate: new Date('08-jan-2023') },
      { id: 2, name: 'department2', regDate: new Date('08-jan-2023') },
      { id: 3, name: 'department3', regDate: new Date('08-jan-2023') },
      { id: 4, name: 'department4', regDate: new Date('08-jan-2023') },
    ];
    let salary = [
      { id: 1, amount: 500, regDate: new Date('08-jan-2023') },
      { id: 2, amount: 400, regDate: new Date('08-jan-2023') },
      { id: 3, amount: 600, regDate: new Date('08-jan-2023') },
      { id: 4, amount: 800, regDate: new Date('08-jan-2023') },
    ];
    let employee = [
      {
        Eid: 1,
        Ename: 'Ahmed',
        companyId: 1,
        departmentId: 2,
        salaryId: 1,
        regDate: new Date('06-jan-2023'),
      },
      {
        Eid: 2,
        Ename: 'mehamed',
        companyId: 2,
        departmentId: 2,
        salaryId: 1,
        regDate: new Date('06-jan-2023'),
      },
      {
        Eid: 3,
        Ename: 'seid',
        companyId: 1,
        departmentId: 1,
        salaryId: 2,
        regDate: new Date('06-jan-2023'),
      },
      {
        Eid: 4,
        Ename: 'yesuf',
        companyId: 2,
        departmentId: 1,
        salaryId: 2,
        regDate: new Date('06-jan-2023'),
      }
    ];
    return { company, department, salary, employee }
  }

}