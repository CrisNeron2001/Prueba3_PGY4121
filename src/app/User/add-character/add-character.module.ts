import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCharacterPageRoutingModule } from './add-character-routing.module';

import { AddCharacterPage } from './add-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCharacterPageRoutingModule
  ],
  declarations: [AddCharacterPage]
})
export class AddCharacterPageModule {}
