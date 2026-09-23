import { Injectable } from '@angular/core';
import { NuevoProducto, Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Teclado mecánico',
      precio: 89900,
      descuento: 15,
      fechaAlta: new Date('2026-08-12T12:00:00'),
    },
    {
      id: 2,
      nombre: 'Mouse inalámbrico',
      precio: 47600,
      descuento: 10,
      fechaAlta: new Date('2026-08-19T12:00:00'),
    },
    {
      id: 3,
      nombre: 'Soporte para notebook',
      precio: 32900,
      descuento: 20,
      fechaAlta: new Date('2026-09-02T12:00:00'),
    },
  ];

  private siguienteId = 4;

  getProductos(): Producto[] {
    return this.productos.map((producto) => ({ ...producto }));
  }

  addProducto(datos: NuevoProducto): Producto {
    const producto: Producto = {
      ...datos,
      id: this.siguienteId++,
      fechaAlta: new Date(),
    };

    this.productos.push(producto);
    return { ...producto };
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }
}
