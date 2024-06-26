import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.formBuilder.group({
    useremail: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: UntypedFormBuilder, private authService: AuthService) {
    this.authService.logout();
  }

  loginSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }

  }
}