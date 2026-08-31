# Memoria - Lio B Studios

---

### [2026-08-31 00:01:17] - 🧠 Decisión: Imagen de cita con efecto parallax

**Qué pasó**: Se implementó la imagen "imagen de la cita.PNG" en la sección de cita con efecto parallax (imagen fija, página scrollea encima).

**Contexto**: El usuario quería mostrar el retrato con micrófono y luces LED verdes en la sección "Una cámara no cambia el mundo...", con la cara visible y efecto de imagen fija al hacer scroll.

**Detalles técnicos**:
- `index.html:289-301`: Sección reestructurada con wrapper + overlay + contenido
- `css/styles.css:989-1040`: Sección 13 rediseñada
- `js/main.js`: Se eliminó el handler JS de parallax (ya no se necesita)

**Aproximaciones fallidas**:
1. `position: fixed` + `z-index: -1` → imagen quedaba detrás del body
2. `clip-path: inset(25% 0 0 0)` → posición correcta pero otros problemas
3. `position: sticky` + `min-height: 200vh` → creaba espacio oscuro debajo
4. JS parallax con `translateY` → no funcionaba correctamente

**Solución final**: `background-attachment: fixed` en la sección con `background-size: cover` y `background-position: center 30%`. El `img` se oculta porque el background CSS hace el trabajo.

**Resultado**: Efecto parallax funcional donde la imagen queda fija mientras la página scrollea.

**Siguientes pasos**: Verificar visualmente en el navegador. Ajustar `background-position` si la cara no está centrada correctamente.

---

