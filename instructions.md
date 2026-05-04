# Instrucciones para Asistentes IA (LLMs) y Desarrolladores: Creación de Diapositivas

Este documento contiene las reglas y estructuras necesarias para extender o modificar la presentación de **Arquitectura de Software** para **Industrias Metalúrgicas Acero**. Todo agente LLM o desarrollador que colabore en este proyecto debe leer y aplicar estas directrices.

## 1. Estructura General del Proyecto

La presentación es una web pura desarrollada con HTML, CSS (Vanilla) y JS (Vanilla).
- `index.html`: Contiene toda la estructura y contenido de las diapositivas.
- `css/style.css`: Sistema de diseño, variables de color (celeste, azul espacial) y layouts de las diapositivas.
- `js/script.js`: Lógica de navegación. **No es necesario modificar este archivo al agregar nuevas diapositivas.**

## 2. Cómo agregar una nueva diapositiva

Todas las diapositivas deben insertarse dentro del contenedor principal `<div class="slides-container" id="slides-container">` en `index.html`. 

### Estructura base de una diapositiva:
```html
<!-- Diapositiva X: Título descriptivo -->
<section class="slide" id="slide-X">
    <div class="slide-content">
        <!-- El contenido de la diapositiva va aquí -->
        <h2>Título de la Diapositiva</h2>
        <p>Texto descriptivo...</p>
    </div>
</section>
```
*Nota: El JS detectará automáticamente la nueva clase `.slide` y actualizará el contador general y la navegación. Solo asegúrate de incrementar el `id="slide-X"` de forma secuencial.*

## 3. Layouts de Diseño Disponibles

Para mantener la estética premium de la presentación, **debes utilizar las clases CSS preexistentes**. No utilices estilos en línea (inline styles) ni frameworks como Tailwind.

Aquí están los Layouts disponibles que puedes usar dentro del `<div class="slide-content">`:

### A. Layout de Cuadrícula (Features Grid)
Ideal para listar características, conceptos o puntos clave con íconos.
```html
<h2>Título del Tema</h2>
<div class="features-grid">
    <div class="feature-item">
        <div class="feature-icon">🚀</div>
        <h3>Concepto 1</h3>
        <p>Descripción detallada del concepto.</p>
    </div>
    <!-- Agregar más .feature-item según sea necesario -->
</div>
```

### B. Layout Dividido (Split Layout)
Ideal para texto a la izquierda y una imagen o diagrama grande a la derecha.
```html
<h2>Título del Tema</h2>
<div class="split-layout">
    <div class="split-text">
        <div class="info-card">
            <h3><i>1</i> Punto Clave</h3>
            <p>Descripción del punto clave.</p>
        </div>
        <div class="info-card">
            <h3><i>2</i> Otro Punto Clave</h3>
            <p>Descripción adicional.</p>
        </div>
    </div>
    <div class="split-image-wrapper">
        <img src="ruta_a_la_imagen.png" alt="Descripción" class="split-image">
    </div>
</div>
```

## 4. Guía Estética (UI/UX)

- **Tipografía**: Utiliza `<h1>` para el título principal de la presentación y `<h2>` para los títulos de cada diapositiva. Usa `<h3>` para subtítulos o encabezados de tarjetas.
- **Íconos**: Como la presentación no carga una librería de fuentes externa (como FontAwesome), el estándar actual es usar Emojis (`🚀`, `⚙️`, `🏭`, `🔒`) dentro de la clase `.feature-icon` o números en itálicas (`<i>1</i>`) para enumeraciones.
- **Imágenes**: Si necesitas generar y agregar un diagrama, asegúrate de guardar la imagen en el directorio raíz o en una carpeta de assets y referenciarla correctamente. Las imágenes se muestran mejor usando el layout `.split-layout`.
- **Efectos**: El sistema ya provee *Glassmorphism* (fondo borroso) y animaciones de transición en las clases principales (`.slide-content`, `.slide`).

## 5. Procedimiento de Control de Versiones

Si estás trabajando como un agente de IA interactuando a través del sistema del usuario:
1. Edita el archivo `index.html` utilizando las herramientas adecuadas.
2. Haz `git add .`
3. Haz `git commit -m "feat: Agregar diapositiva [Tema]"`
4. Si hay ramas establecidas o Pull Requests (como lo requiere el flujo de trabajo de Aura IT), respeta el flujo creando ramas con formato `feature/nombre-de-slide`.
