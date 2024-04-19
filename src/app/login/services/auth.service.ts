import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private route: ActivatedRoute,) { }

  login(form: FormGroup) {
    if (form.value.useremail == 'user@email.com' && form.value.password == '123456') {
      // this.router.navigate(['dashboard'], {relativeTo: this.route});
      this.router.navigate(['/login/dashboard'], { relativeTo: this.route })
      console.log('Usuário autenticado!');
    } else {
      console.log('Usuário não autenticado!');
    }
  }
}