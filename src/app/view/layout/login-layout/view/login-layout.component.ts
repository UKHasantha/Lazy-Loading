import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { User } from 'src/app/dtos/user';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  loginForm=new FormGroup({
    'username':new FormControl('', [
      Validators.required]),
    'userpassword':new FormControl('', [
      Validators.required]),
  });

  get username(){
    return this.loginForm.get('username');
  }
  get userpassword(){
    return this.loginForm.get('userpassword');
  }


  user:User = new User();
  failed:boolean;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  // login(){
  //   console.log(this.UserName.value);

  //   alert(this.UserName.value)
    
  //   console.log(this.Password.value);

  //   alert(this.Password.value);

  //   this.authService.login(this.UserName.value, this.Password.value);
  // }
  login(): void{
    this.authService.login(this.user).subscribe(
      (result)=>{
        this.failed = !result;
      }
    );
  }
}
