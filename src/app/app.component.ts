import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-tela-de-login';
  isLoggedIn$ = Observable<boolean>;

  constructor(private authService: AuthService){
    // this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
  
  
}
