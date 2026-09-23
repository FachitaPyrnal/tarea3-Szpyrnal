export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento: number;
  fechaAlta: Date;
}

export type NuevoProducto = Pick<Producto, 'nombre' | 'precio' | 'descuento'>;
