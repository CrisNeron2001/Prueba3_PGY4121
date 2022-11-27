import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckCharacterPage } from './check-character.page';

const routes: Routes = [
  {
    path: '',
    component: CheckCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckCharacterPageRoutingModule {}
