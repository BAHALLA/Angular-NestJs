import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: any;
  url = 'http://localhost:5000/authentification/auth';
  constructor (private http: HttpClient) {}
  signIn() {
  return this.http.get(this.url).subscribe( e => this.isAuth = e);
  }
  signOut() {
    this.isAuth = false;
  }
}
