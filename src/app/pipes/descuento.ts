import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(precio: number, porcentaje: number): number {
    const descuentoValido = Math.min(Math.max(porcentaje, 0), 100);
    return precio * (1 - descuentoValido / 100);
  }
}
