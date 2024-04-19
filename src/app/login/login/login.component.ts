import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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

  constructor(private formBuilder: NonNullableFormBuilder) { }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}