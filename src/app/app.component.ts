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
  isLoggedIn$: Observable<boolean>;
  // mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    // this.authService.mostrarMenuEmitter.subscribe(
    //   mostrar => this.mostrarMenu = mostrar
    // );
  }

  onLogout() {
    this.authService.logout();
  }
}