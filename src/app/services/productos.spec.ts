import { TestBed } from '@angular/core/testing';
import { ProductosService } from './productos';

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('should return the initial products', () => {
    expect(service.getProductos()).toHaveLength(3);
  });

  it('should add and delete a product', () => {
    const nuevo = service.addProducto({ nombre: 'Monitor', precio: 250000, descuento: 5 });

    expect(service.getProductos()).toHaveLength(4);
    service.deleteProducto(nuevo.id);
    expect(service.getProductos()).toHaveLength(3);
  });
});
