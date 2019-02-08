import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Course } from '../dtos/course';

export const MAIN_URL= "http://localhost:8085";
const URL="api/v1/courses";

@Injectable()
export class Coursservice {

    constructor(private http:HttpClient){ }

    saveCourses(course: Course): Observable<boolean>{
        return this.http.post<boolean>(MAIN_URL + URL,course);
      }
    
      getAllCourses(): Observable<Array<Course>>{
        return this.http.get<Array<Course>>(MAIN_URL + URL);
      }
    
      searchCourse(id :String): Observable<Course>{
        return this.http.get<Course>(MAIN_URL + URL + "/"+id);
      }
    
      deleteCourse(id: string): Observable<boolean>{
        return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
      }
    
      getTotalCourses(): Observable<number>{
        return this.http.get<number>(MAIN_URL + URL + "/count");
      }
}
