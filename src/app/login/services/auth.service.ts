import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mostrarMenuEmitter = new EventEmitter<boolean>();
  // private usuarioAutenticado = false;
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {
  }

  login(credentials: Credentials) {
    if (credentials.useremail == 'user@email.com' && credentials.password == '123456') {
      // this.usuarioAutenticado = true;
      localStorage.setItem('token', credentials.password);
      this.loggedIn.next(true);
      this.mostrarMenuEmitter.emit(true);
      // this.router.navigate(['dashboard'], {relativeTo: this.route}); nao funciona porque a service nao tem rota
      this.router.navigate(['/login/dashboard'])
      console.log('Usuário autenticado!');
    } else {
      console.log('else')
      // this.usuarioAutenticado = false;
      localStorage.clear();
      this.loggedIn.next(false);
      this.mostrarMenuEmitter.emit(false);
      console.log('Usuário não autenticado!');
    }
  }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/'])
  }

  usuarioEstaAutenticado() {
    // return this.usuarioAutenticado;
    return this.loggedIn;
  }
}