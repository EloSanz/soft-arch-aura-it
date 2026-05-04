# Presentación Colaborativa - Equipo Aura IT

Bienvenido al repositorio de la presentación de Arquitectura de Software para la facultad. Esta presentación está desarrollada utilizando HTML, CSS y JavaScript base para permitirnos total libertad de diseño y animación, corriendo directamente en cualquier navegador web moderno.

## 🚀 Cómo iniciar el proyecto localmente

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/EloSanz/soft-arch-aura-it.git
   cd soft-arch-aura-it
   ```

2. **Visualizar la presentación:**
   Dado que es un sitio estático, simplemente puedes hacer doble clic en el archivo `index.html` o abrirlo arrastrándolo a tu navegador web favorito.

## 🤝 Lineamientos de Colaboración (¡MUY IMPORTANTE!)

Para evitar conflictos de código cuando varios estemos agregando diapositivas al mismo tiempo, es **obligatorio** seguir estas reglas:

1. **Prohibido subir cambios directamente a la rama `main`**.
2. Todo el trabajo debe realizarse en **ramas (branches) individuales**.
3. Una vez finalizados tus cambios, debes crear un **Pull Request (PR)** hacia la rama `main`.
4. El PR debe ser revisado antes de hacer el *merge*.

### Flujo de trabajo sugerido

1. Asegúrate de estar en `main` y tener los últimos cambios:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Crea tu nueva rama (usa un nombre descriptivo):
   ```bash
   git checkout -b feature/agregar-diapositiva-intro
   ```
3. Haz tus cambios, verifica que se vean bien localmente.
4. Agrega los cambios, haz el commit y súbelos:
   ```bash
   git add .
   git commit -m "Agrega diapositiva de introducción"
   git push origin feature/agregar-diapositiva-intro
   ```
5. Ve a GitHub y abre un Pull Request.

## 📝 Cómo agregar una nueva diapositiva

Todas las diapositivas viven dentro del archivo `index.html`. 

Para añadir una nueva, debes buscar el contenedor `<div class="slides-container" id="slides-container">` y agregar una nueva etiqueta `<section>` siguiendo la estructura:

```html
<!-- Diapositiva 2 -->
<section class="slide" id="slide-2">
    <div class="slide-content">
        <h2>El Título de tu Diapositiva</h2>
        <p>Tu contenido va aquí.</p>
        <ul>
            <li>Punto 1</li>
            <li>Punto 2</li>
        </ul>
    </div>
</section>
```

**Reglas de Maquetado:**
- Siempre usa la clase `slide`.
- Asigna un `id` único (ej. `slide-2`, `slide-3`).
- Coloca todo tu contenido dentro del `div` con la clase `slide-content`.
- (No le pongas la clase `active` a tu diapositiva, el JavaScript se encarga de eso automáticamente).

## 🎮 Controles de la Presentación

- **Avanzar:** Botón "Siguiente", Flecha Derecha (→) o Barra Espaciadora.
- **Retroceder:** Botón "Anterior" o Flecha Izquierda (←).
- **Pantalla Completa:** Botón flotante inferior derecho o tecla `F`.
