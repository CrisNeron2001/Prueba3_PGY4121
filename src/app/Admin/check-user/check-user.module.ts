import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckUserPageRoutingModule } from './check-user-routing.module';

import { CheckUserPage } from './check-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckUserPageRoutingModule
  ],
  declarations: [CheckUserPage]
})
export class CheckUserPageModule {}
