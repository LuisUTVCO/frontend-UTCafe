import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {

  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ProductoComponent, {
      // width: '80%', // Ajusta el ancho del modal según tus necesidades
      // maxWidth: '100px', // Establece el ancho máximo del modal
      maxHeight: '90vh', // Establece la altura máxima del modal
      data: { /* Puedes pasar datos adicionales al modal si es necesario */ }
    });
  }}
  
