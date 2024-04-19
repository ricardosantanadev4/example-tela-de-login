import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.formBuilder.group({});

  constructor(private formBuilder: NonNullableFormBuilder) { }

  submit() { }
  
}