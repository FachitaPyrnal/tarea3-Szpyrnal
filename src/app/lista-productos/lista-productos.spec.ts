import { TestBed } from '@angular/core/testing';
import { ListaProductos } from './lista-productos';

describe('ListaProductos', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductos],
    }).compileComponents();
  });

  it('should add, delete and empty products', () => {
    const fixture = TestBed.createComponent(ListaProductos);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.productos).toHaveLength(3);

    component.productoForm.setValue({
      nombre: 'Monitor 24 pulgadas',
      precio: 240000,
      descuento: 12,
    });
    component.agregarProducto();
    expect(component.productos).toHaveLength(4);

    component.eliminarProducto(component.productos[0]);
    expect(component.productos).toHaveLength(3);

    component.vaciarLista();
    expect(component.productos).toHaveLength(0);
  });
});
