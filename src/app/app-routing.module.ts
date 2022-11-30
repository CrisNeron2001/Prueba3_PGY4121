import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./User/login/login.module').then(m => m.LoginPageModule),

  },
  {
    path: 'signin',
    loadChildren: () => import('./User/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./User/menu/menu.module').then(m => m.MenuPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./Admin/login-admin/login-admin.module').then(m => m.LoginAdminPageModule)
  },
  {
    path: 'sign-admin',
    loadChildren: () => import('./Admin/sign-admin/sign-admin.module').then(m => m.SignAdminPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./Admin/menu-admin/menu-admin.module').then(m => m.MenuAdminPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login-admin']))
  },
  {
    path: 'profile',
    loadChildren: () => import('./User/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./User/character/character.module').then(m => m.CharacterPageModule)
  },
  {
    path: 'check-character/:id',
    loadChildren: () => import('./User/check-character/check-character.module').then(m => m.CheckCharacterPageModule)
  },
  {
    path: 'check-user',
    loadChildren: () => import('./Admin/check-user/check-user.module').then(m => m.CheckUserPageModule)
  },
  {
    path: 'add-character',
    loadChildren: () => import('./User/add-character/add-character.module').then( m => m.AddCharacterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }