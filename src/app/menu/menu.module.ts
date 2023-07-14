import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { MenuComponent } from './menu/menu.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';


@NgModule({
  declarations: [
    AlimentosComponent,
    BebidasComponent,
    PostresComponent,
    MenuComponent,
    MetodoPagoComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
