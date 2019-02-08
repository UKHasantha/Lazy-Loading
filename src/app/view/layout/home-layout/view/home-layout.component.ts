import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
