# Gestión de productos con Angular

Aplicación desarrollada para la actividad de Angular intermedio sobre servicios y pipes. Permite consultar un inventario simulado, agregar productos, eliminarlos y visualizar precios y fechas con transformaciones de Angular.

## Funcionalidades

- Servicio `ProductosService` con los métodos `getProductos()`, `addProducto()` y `deleteProducto()`.
- Inyección del servicio en el componente `lista-productos`.
- Carga inicial de datos mediante el ciclo de vida `ngOnInit`.
- Alta de productos con formulario reactivo y validaciones.
- Eliminación individual y vaciado completo del inventario.
- Mensaje dinámico cuando la lista no contiene productos.
- Pipe `currency` para precios y pipe `date` para fechas de alta.
- Pipe personalizado `descuento` para calcular el precio final.

## Requisitos

- Node.js 20.19 o superior.
- npm 11 o compatible.
- Angular CLI 21.

## Instalación y ejecución

```bash
git clone https://github.com/FachitaPyrnal/tarea3-Szpyrnal.git
cd tarea3-Szpyrnal
npm install
npm start
```

Abrir `http://localhost:4200/` en el navegador.

## Pruebas y compilación

```bash
npm test -- --watch=false
npm run build
```

## Estructura principal

```text
src/app/
|-- lista-productos/   # Componente e interfaz de inventario
|-- models/            # Interfaz Producto
|-- pipes/             # Pipe personalizado descuento
`-- services/          # Servicio de productos
```

## Créditos

- Estudiante: Ivan Szpyrnal
- Curso: Angular intermedio
- Módulo 1 - Unidad 3: Gestión y visualización de datos con pipes

## Fuentes

- [Angular - Dependency injection](https://angular.dev/guide/di/dependency-injection)
- [Angular - Pipes](https://angular.dev/guide/templates/pipes)
- [Angular - Reactive forms](https://angular.dev/guide/forms/reactive-forms)
- Freeman, A. *Pro Angular 9*. 6.a ed., Apress, 2020.

No se utilizaron imágenes externas en el proyecto.
