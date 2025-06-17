## Prueba Frontend Bikuma

## Repositorio

[https://github.com/AnaisCabado/prueba_bikuma](https://github.com/AnaisCabado/prueba_bikuma)

## Objetivo

Implementar el diseño proporcionado en Figma como una página web funcional y fiel al prototipo.

## Tecnologías Utilizadas
**React**  
Framework principal para el desarrollo de componentes
**SASS/SCSS**
Preprocesador CSS para estilos modulares y reutilizables

## Desarrollo y Decisiones Técnicas

### 1. *Fidelidad al Diseño*

- Replicado visual según el prototipo de Figma.
- Respeto por márgenes, colores, tipografías y espaciados originales.
- Combinación de *flex* y *grid* para una estructura adaptable.
- Iconografía y recursos visuales integrados desde Figma, exceptuando algún svg sacado de Bootstrap.

### 2. *Calidad del Código*

- Arquitectura basada en componentes funcionales (React).
- SCSS modular, separado por componente.
- Uso coherente de nomenclatura BEM y convenciones claras.
- Código limpio y ordenado

### 3. *Funcionalidad*

- Carrusel automático de noticias sin dependencias externas, intenté implementar el framework de Swiper pero me daba problemas así que decidí crear una solución a mano.
- Hover y transiciones suaves en tarjetas y botones.
- Zoom animado en las cards del carrusel.
- Menú responsive completamente funcional.

### 4. *Optimización*

- Imágenes optimizadas y cargadas con `loading="lazy"`.
- Animaciones suaves usando `transform` y `will-change`.
- Etiquetas semánticas para SEO y accesibilidad.

### 5. *Compatibilidad y Responsive Design*

- Responsive para desktop y móviles.
- Media queries específicas para adaptar el layout.
- Pruebas realizadas en Chrome, Firefox y Edge.
