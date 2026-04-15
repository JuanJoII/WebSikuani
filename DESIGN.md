# Design System Specification: Project Jade

Este documento sirve como la única fuente de verdad para la conversión de wireframes de baja fidelidad a mockups de alta fidelidad.

## 1. Paleta de Colores (Brand Colors)

### Colores Principales
* **Primary:** `#368062` (Verde Bosque) - Usado para acciones principales, botones primarios y acentos de marca.
* **Secondary:** `#9AAD8C` (Verde Musgo) - Usado para estados secundarios, fondos suaves o elementos de apoyo.
* **Tertiary:** `#F7DD16` (Amarillo Vibrante) - Usado para destacar elementos clave, alertas de atención o iconos específicos (ej. botones de edición).
* **Neutral:** `#EEEEE9` (Hueso/Gris Cálido) - Color de fondo principal para superficies y contenedores.

### Escalas de Grises y Funcionales
* **Surface:** `#FFFFFF` (Blanco puro para cards internas).
* **Inverted:** `#222222` (Para texto oscuro o botones contrastados).
* **Error/Danger:** `#B22222` (Rojo oscuro, como se ve en el icono de papelera).

---

## 2. Tipografía (Typography)

| Rol | Fuente | Estilo | Uso Sugerido |
| :--- | :--- | :--- | :--- |
| **Headlines** | `DM Serif Display` | Serif / Regular | Títulos de sección, Hero titles, Títulos de tarjetas grandes. |
| **Body** | `Be Vietnam Pro` | Sans Serif / Regular | Párrafos, descripciones, contenido de lectura larga. |
| **Labels/UI** | `Be Vietnam Pro` | Sans Serif / Medium | Botones, inputs, etiquetas de navegación, tooltips. |

> **Nota:** Mantener un tracking (espaciado entre letras) estándar. Para `DM Serif Display`, asegurar que el tamaño sea lo suficientemente grande para apreciar el contraste del trazo.

---

## 3. Componentes y Estilos Visuales

### Botones (Buttons)
* **Primary:** Fondo `#368062`, texto `#FFFFFF`, border-radius: `8px`.
* **Secondary:** Fondo `#9AAD8C` o neutro, texto `#222222`.
* **Outlined:** Borde `#222222` (1px), sin fondo, texto `#222222`.
* **Inverted:** Fondo `#222222`, texto `#FFFFFF`.

### Inputs y Búsqueda
* **Search Bar:** Fondo `#EEEEE9` con borde sutil o sombra interna muy suave. Iconografía en `#222222`.
* **Border Radius:** General de `12px` para contenedores y `8px` para elementos de interacción.

### Navegación
* **Bottom Nav / Sidebar:** Fondo claro (`#EEEEE9` o `#FFFFFF`).
* **Active State:** Icono dentro de un círculo `#368062` con glifo en blanco.

---

## 4. Instrucciones de Aplicación para el Agente

Al procesar los wireframes de Figma, aplica las siguientes reglas:

1.  **Jerarquía Visual:** Usa `DM Serif Display` únicamente para encabezados. No la uses en botones ni menús de navegación.
2.  **Espaciado:** Utiliza un sistema de rejilla basado en **8px** (8, 16, 24, 32, 48).
3.  **Contraste:** Los iconos de acción (como editar) deben usar el color **Tertiary** `#F7DD16` sobre fondos oscuros o claros según la visibilidad. El icono de borrar siempre en el tono rojo especificado.
4.  **Cards:** Las tarjetas deben tener esquinas redondeadas (`16px`) y un borde muy fino o una sombra `0px 4px 12px rgba(0,0,0,0.05)`.

---