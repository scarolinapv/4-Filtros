import { Injectable } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() { 
    this.students.push({
      name: 'Susana Carolina Plata Vazquez',
      controlnumber: '17401045',
      active: true
    });

    this.students.push({
      name: 'Mario Alejandro Mendez Montoya',
      controlnumber: '19982010',
      active: true
    });

    this.students.push({
      name: 'Alice Carolina Mendez Plata',
      controlnumber: '20191206',
      active: false
    });
  }
  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(Position: number): void {
    this.students[Position].active = !this.students[Position].active;
  }
}
