import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // mostrarMenuEmitter = new EventEmitter<Boolean>();
  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  login(form: FormGroup) {
    if (form.value.useremail == 'user@email.com' && form.value.password == '123456') {
      this.usuarioAutenticado = true;
      // this.mostrarMenuEmitter.emit(true);
      // this.router.navigate(['dashboard'], {relativeTo: this.route}); nao funciona porque a service nao tem rota
      this.router.navigate(['/login/dashboard'])
      console.log('Usuário autenticado!');
    } else {
      this.usuarioAutenticado = false;
      // this.mostrarMenuEmitter.emit(false);
      console.log('Usuário não autenticado!');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
