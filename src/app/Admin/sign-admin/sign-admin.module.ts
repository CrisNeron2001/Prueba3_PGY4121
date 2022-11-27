import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignAdminPageRoutingModule } from './sign-admin-routing.module';

import { SignAdminPage } from './sign-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignAdminPage]
})
export class SignAdminPageModule { }
