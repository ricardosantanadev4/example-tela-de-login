import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }