import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 * The following routing config enables lazy loading of feature modules.
 * The default path is currently set to ShoppingCart module main page.
 */

const routes: Routes = [
  { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule) },
  { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
