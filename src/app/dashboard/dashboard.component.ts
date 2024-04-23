import { Component } from '@angular/core';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // @Output() private logout = new EventEmitter();

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
}