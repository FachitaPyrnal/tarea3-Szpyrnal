import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../models/producto';
import { DescuentoPipe } from '../pipes/descuento';
import { ProductosService } from '../services/productos';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, ReactiveFormsModule, DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  private readonly productosService = inject(ProductosService);
  private readonly formBuilder = inject(FormBuilder);

  productos: Producto[] = [];
  formularioEnviado = false;
  mensaje = '';

  readonly productoForm = this.formBuilder.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [null as number | null, [Validators.required, Validators.min(1)]],
    descuento: [10, [Validators.required, Validators.min(0), Validators.max(90)]],
  });

  ngOnInit(): void {
    this.cargarProductos();
  }

  agregarProducto(): void {
    this.formularioEnviado = true;
    this.mensaje = '';

    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const { nombre, precio, descuento } = this.productoForm.getRawValue();
    this.productosService.addProducto({
      nombre: nombre.trim(),
      precio: precio!,
      descuento,
    });
    this.cargarProductos();
    this.mensaje = `${nombre.trim()} fue agregado correctamente.`;
    this.formularioEnviado = false;
    this.productoForm.reset({ nombre: '', precio: null, descuento: 10 });
  }

  eliminarProducto(producto: Producto): void {
    this.productosService.deleteProducto(producto.id);
    this.cargarProductos();
    this.mensaje = `${producto.nombre} fue eliminado.`;
  }

  vaciarLista(): void {
    this.productos.forEach((producto) => this.productosService.deleteProducto(producto.id));
    this.cargarProductos();
    this.mensaje = 'Se eliminaron todos los productos.';
  }

  controlInvalido(nombre: 'nombre' | 'precio' | 'descuento'): boolean {
    const control = this.productoForm.controls[nombre];
    return control.invalid && (control.touched || this.formularioEnviado);
  }

  private cargarProductos(): void {
    this.productos = this.productosService.getProductos();
  }
}
