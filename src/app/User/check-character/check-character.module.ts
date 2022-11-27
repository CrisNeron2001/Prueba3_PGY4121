import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckCharacterPageRoutingModule } from './check-character-routing.module';

import { CheckCharacterPage } from './check-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckCharacterPageRoutingModule
  ],
  declarations: [CheckCharacterPage]
})
export class CheckCharacterPageModule {}
