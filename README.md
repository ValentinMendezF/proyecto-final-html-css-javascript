# Práctico: Front End - JavaScript

## Enunciado del Práctico: Sistema de Gestión de Pedidos para una Empresa de Comidas

### 1. Estructura HTML

- **Formulario de Registro de productos:**
  - Campos para ingresar la información del producto:
    - Nombre
    - Imagen (url)
    - Precio
    - Selector de categoría

- **Menú de Comidas:**
  - Un listado estático o dinámico de las opciones del menú, con sus respectivos precios.

### 2. Estilo CSS

- **Diseño Responsive:**
  - Utiliza media queries para que la interfaz se adapte a diferentes tamaños de pantalla.
  - El formulario de productos y la grilla deben reorganizarse y ajustarse correctamente en dispositivos móviles.

- **Flexbox y Grid:**
  - Emplea Flexbox para alinear los campos del formulario y las opciones del menú.
  - Usa Grid para estructurar la grilla de pedidos, asegurando una disposición clara y organizada.

- **Estilización:**
  - Aplica estilos atractivos a los botones y campos de formulario.
  - Resalta los distintos tipos de comida y los totales de los pedidos para una visualización rápida.

### 3. Funcionalidad JavaScript

- **Manejo de productos:**
  - Los productos deben ser almacenados en un array de objetos.
  - Implementa funciones para agregar, calcular el total, y eliminar productos del array.
  - **Almacenamiento Persistente:**
    - Utiliza `localStorage` para guardar los productos, asegurando que los datos persistan entre sesiones.
  - Al recargar la página, carga los productos desde `localStorage`.

- **Interacción con el DOM:**
  - Genera dinámicamente la grilla de productos y los totales en función de los datos almacenados.
  - Permite a los usuarios eliminar productos, actualizando tanto el DOM como `localStorage`.

### 4. Realización del proyecto

- Este proyecto debe realizarse de la mano de los vídeos subidos en Colmena Tec. Pueden haber variantes en el aspecto visual, pero los requisitos deben estar completamente realizados. La entrega es individual.
