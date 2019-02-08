import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/dtos/course';
import { Coursservice } from 'src/app/service/coursservice';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  courses: Array<Course> = [];
  selectedCourse: Course = new Course();
  // tempCourse: Course = null;
  // manuallySelected: boolean = false;
  // serchedCourse: Course = new Course();
  constructor(private courseservice:Coursservice) { }

  ngOnInit() {
    this.loadAllCourses;
  }

  loadAllCourses(): void {
    this.courseservice.getAllCourses().subscribe(
      (result) => {
        this.courses = result;
        console.log(this.courses);
      }
    )
  }

  // clear(): void {
  //   let index = this.courses.indexOf(this.selectedCourse);

  //   if (index !== -1) {
  //     this.courses[index] = this.tempCourse;
  //     this.tempCourse = null;
  //   }
  //   this.selectedCourse = new Course();
  //   this.manuallySelected = false;
  // }

  // selectCourse(course: Course): void {
  //   this.clear();
  //   this.selectedCourse= course;
  //   this.tempCourse = Object.assign({}, course);
  //   this.manuallySelected = true;
  // }

  // tableClick(course:Course):void{
  //   this.courseservice.searchCourse(course.cid).subscribe(
  //     (result)=>{
  //       this.selectedCourse = result;
  //     }
  //   );
  // }

  // deletCourse(courseid :Course):void {
  //   if (confirm("Are you sure you want to delete this Course?")) {
  //     this.courseservice.deleteCourse(courseid.cid).subscribe(
  //       (result) => {
  //         if (result) {
  //           alert("Course has been Deleted successfully");
  //         } else {
  //           alert("Failed to deleted course");
  //         }
  //         this.loadAllCourses();
  //       }
  //     )
  //   }
  // }
}
