import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { StudentDTO } from '../dtos/student-dto';
import {Observable} from "rxjs";

export const MAIN_URL= "http://localhost:8085";
const URL="/api/v1/students";

@Injectable()
export class Studentservice {

constructor(private http:HttpClient){}

  saveStudent(student: StudentDTO): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL+URL,student);
  }
  getAllStudent(): Observable<Array<StudentDTO>>{
    return this.http.get<Array<StudentDTO>>(MAIN_URL + URL);
  }
}
