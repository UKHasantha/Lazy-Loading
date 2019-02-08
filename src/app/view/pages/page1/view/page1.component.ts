import { Component, OnInit } from '@angular/core';
import { StudentDTO } from 'src/app/dtos/student-dto';
import { Studentservice } from 'src/app/service/studentservice';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  students: Array<StudentDTO> = [];
  selectedStudent: StudentDTO = new StudentDTO();

  constructor(private studentservice:Studentservice) { }

  ngOnInit() {
    this.loadAllStudent();
  }

  loadAllStudent(): void {
    this.studentservice.getAllStudent().subscribe(
      (result) => {
        this.students = result;
        console.log(this.students);
      }
    )
  }
}
