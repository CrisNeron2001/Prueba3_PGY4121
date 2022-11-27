import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignAdminPage } from './sign-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SignAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignAdminPageRoutingModule {}
