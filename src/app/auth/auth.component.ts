import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  stattus = false;
  constructor(private authservice: AuthService, private  route: Router) { }

  ngOnInit() {
    this.stattus = this.authservice.isAuth;
  }
  onSignIn() {
      this.authservice.signIn();
      console.log('rederiction');
      this.stattus = this.authservice.isAuth;
      this.route.navigate(['/home']);
  }

}
