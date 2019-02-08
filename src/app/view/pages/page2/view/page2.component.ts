import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { StudentDTO } from 'src/app/dtos/student-dto';
import { Studentservice } from 'src/app/service/studentservice';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  form=new FormGroup({
    'studentid': new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    'studentname':new FormControl('', [
        Validators.required
    ]),
    'studentcontact':new FormControl('',[
      Validators.required
    ]),
    'studentaddress':new FormControl('',[
      Validators.required
    ])
  });

  get studentid(){
    return this.form.get('studentid');
  }
  get studetname(){
    return this.form.get('studentname');
  }
  get studentcontact(){
    return this.form.get('studentcontact')
  }
  get studentaddress(){
    return this.form.get('studentaddress')
  }
  selectedStudent: StudentDTO = new StudentDTO();
  constructor(private studentservice:Studentservice) { }

  ngOnInit() {
  }

  saveStudent(): void {
    this.studentid.setValue('studentid')
    this.studetname.setValue('studentname')
    this.studentcontact.setValue('studentcontact')
    this.studentaddress.setValue('studentaddress')
    this.studentservice.saveStudent(this.selectedStudent).subscribe(
      (result) => {
        if (result) {
          console.log(this.selectedStudent);
          alert("Student has been saved successfully..");
        } else {
          alert("Failed to save the Student..");
        }
      }
    );
  }
}
