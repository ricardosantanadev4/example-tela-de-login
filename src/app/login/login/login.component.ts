import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.formBuilder.group({
    useremail: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  // @Output() newLoginEvent = new EventEmitter();

  constructor(private formBuilder: NonNullableFormBuilder, private authService: AuthService) { }

  loginSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
      this.authService.login(this.form);
    }
  }

}