import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { MenuComponent } from './menu/menu.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'favoritos',
        component: FavoritosComponent
      },
      {
        path: '**',
        redirectTo: 'page-error'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
