import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './login/services/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }