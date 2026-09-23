import { Component } from '@angular/core';
import { ListaProductos } from './lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  imports: [ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
