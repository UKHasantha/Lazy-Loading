import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { User } from 'src/app/dtos/user';
import { MAIN_URL } from '../studentservice';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
const URL= "/api/v1/login";
@Injectable()
export class AuthService {

  // private isLogin: boolean = false;

  // get isLoggedIn() {

  //   if (sessionStorage.getItem("token")) {
  //     return true;
  //   }

  //   return false;

  // }

  // constructor(private router: Router) { }

  // login(userName: string, password: string) {
  //   sessionStorage.setItem("token", "token");
  //   this.router.navigate(['/home']);
  // }


  // logout() {
  //   //this.isLogin = false;
  //   sessionStorage.removeItem("token");
  //   this.router.navigate(['/login']);
  // }
    constructor(private http:HttpClient,private router:Router){}
    login(user:User):Observable<boolean> {
      return this.http.post<boolean>(MAIN_URL + URL, user)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/home']);
          }
          return result;
        })
      )
    }
    isAuthenticated(): boolean{
      if (sessionStorage.getItem("token")){
        return sessionStorage.getItem("token") == 'false' ? false: true;
      }
    }
  
    logout(): void{
      sessionStorage.removeItem("token");
      this.router.navigate(['/login']);
    }
}