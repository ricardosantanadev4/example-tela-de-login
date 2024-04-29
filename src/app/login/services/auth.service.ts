import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { BehaviorSubject, catchError, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  private readonly authUrl = "/api/token/login"

  constructor(private router: Router, private http: HttpClient) {
  }

  login(credentials: Credentials) {
    // if (credentials.useremail == 'user@email.com' && credentials.password == '123456') {
    //   localStorage.setItem('token', credentials.password);
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/dashboard'])
    //   console.log('Usuário autenticado!');
    // } else {
    //   console.log('else')
    //   localStorage.clear();
    //   this.loggedIn.next(false);
    //   console.log('Usuário não autenticado!');
    // }
    console.log(credentials);
    return this.http.post(this.authUrl, credentials)
      .subscribe({
        next: data => this.loginSucess(JSON.parse(JSON.stringify(data)).acessTonkenm),
        error: (err) => console.log(err)
      });
  }

  loginSucess(credentials: string) {
    console.log(credentials)
    localStorage.setItem('token', credentials);
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard'])
    console.log('Usuário autenticado!');
  }

  // loginError() {
  // console.log('else')
  // localStorage.clear();
  // this.loggedIn.next(false);
  // console.log('Usuário não autenticado!');
  // }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/'])
  }

  updateLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }
}
