# 🧑‍💼 Panel Administrativo con React + Vite

Proyecto académico para el taller de React JS. Consiste en un panel administrativo moderno con navegación SPA (Single Page Application) que incluye vistas de Clientes, Proveedor, Usuarios y Logout. Se utilizó **Vite** como herramienta de desarrollo, **React Router DOM** para las rutas y **Bootstrap 5** + **CSS personalizado** para el diseño, incluyendo soporte automático para modo oscuro/claro según la preferencia del sistema.

## 📸 Captura de pantalla

![Vista del panel administrativo](./captura.png)

## 📋 Pasos seguidos para desarrollar el proyecto

1. **Inicialización del proyecto**  
   `npm create vite@latest panel-administrativo` → seleccionar React.

2. **Instalación de dependencias**  
   `npm install`  
   `npm install react-router-dom bootstrap bootstrap-icons`

3. **Estructura de carpetas y componentes**  
   Se creó la carpeta `src/pages/` con los componentes:  
   `Clientes.jsx`, `Proveedor.jsx`, `Usuarios.jsx`, `Logout.jsx`.

4. **Configuración de rutas**  
   En `App.jsx` se implementó `<BrowserRouter>`, `<Routes>`, `<Route>` y `<NavLink>` para navegación sin recarga.

5. **Estilizado**  
   - Bootstrap 5 para la barra de navegación, tarjetas, tablas y botones.  
   - Bootstrap Icons para los íconos.  
   - Archivo `index.css` con variables CSS, modo oscuro automático y contenedor centrado.

6. **Mejoras visuales**  
   - Tarjetas de resumen (totales, activos, ventas) en la vista Clientes.  
   - Tabla de datos simulados con botones de acción.  
   - Tarjetas con información de proveedores.  
   - Tabla de usuarios con roles y estados.  
   - Footer institucional.

7. **Documentación y despliegue**  
   - Se creó este `README.md`.  
   - Se tomó una captura de pantalla del proyecto funcionando.  
   - Se subió el código a GitHub.
