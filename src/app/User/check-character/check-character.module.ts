import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckCharacterPageRoutingModule } from './check-character-routing.module';

import { CheckCharacterPage } from './check-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckCharacterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CheckCharacterPage]
})
export class CheckCharacterPageModule { }
