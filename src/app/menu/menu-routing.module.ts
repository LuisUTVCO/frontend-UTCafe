import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { MenuComponent } from './menu/menu.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'alimentos',
    component: AlimentosComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'postres',
    component: PostresComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'metodo-pago',
    component: MetodoPagoComponent
  },
  {
    path: '**',
    redirectTo: '/pagina-error'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
