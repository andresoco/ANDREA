# 🎉 Mementos - Página Dedicada a Mi Mejor Amigo

Una página web emocional y moderna diseñada para celebrar la amistad, los recuerdos compartidos y los momentos especiales con tu mejor amigo.

## 📁 Estructura de Archivos

```
paginaDavid/
├── index.html           # Página principal
├── styles.css           # Estilos y animaciones
├── script.js            # Funcionalidad interactiva
├── imag/                # Carpeta con fotos (9 imágenes)
│   ├── david1.png
│   ├── David2.png
│   └── ... (más fotos)
├── music/               # Carpeta con música de fondo
│   └── WhatsApp Audio...
├── videos/              # Carpeta para videos (opcional)
└── images/              # Carpeta adicional para imágenes
```

## 🎨 Características

### ✨ Secciones Incluidas

1. **Landing Page (Inicio)**
   - Título llamativo con animação de entrada suave
   - Botón de "Descubramos Juntos" con scroll suave
   - Fondo con gradiente moderno

2. **Contador de Aniversario**
   - Muestra: años, meses, días y horas desde el 15 de Septiembre de 2014
   - Se actualiza automáticamente cada hora
   - Cards interactivas con hover effect

3. **Galería de Fotos (Carrusel)**
   - Carga automáticamente las 9 fotos de la carpeta `/imag`
   - Botones de navegación izquierda y derecha
   - Navegación por puntos (dots)
   - Soporte para navegación con flechas del teclado
   - Transiciones suaves

4. **Video Especial**
   - Reproductor integrado
   - Detecta si existe un video en `/videos/video.mp4`
   - Diseño centrado y responsive

5. **Mensaje Personal**
   - Texto completo y emotivo dedicado a tu amigo
   - Bien formateado en párrafos
   - Diseño con estilo de tarjeta elegante

6. **Reproductor de Música**
   - Carga automáticamente la música de `/music`
   - Botón elegante de play/pause fijo en esquina inferior derecha
   - Loop automático
   - Animación pulsante

7. **Cambio de Idioma (ES/EN)**
   - Botón en la esquina superior derecha
   - Cambia dinámicamente TODO el contenido
   - No requiere recargar la página
   - Almacena la preferencia en la sesión

8. **Sección Sorpresa**
   - Botón interactivo que muestra un mensaje especial
   - Segundo clic agrega efecto de confetti (caída de emojis)
   - Tercer clic reinicia la sorpresa

### 🎯 Diseño & Responsividad

- **Colores**: Degradado de celeste (#0891b2) y verde (#16a34a)
- **Tipografía**: Newsreader (Headlines) + Plus Jakarta Sans (Body)
- **Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **Animaciones**: Suaves transiciones y efectos al scroll y hover

### ⌨️ Funcionalidades JavaScript

- Carrusel de galería con navegación
- Contador de aniversario dinámico
- Toggle de idiomas sin recargar página
- Control de reproductor de audio
- Efectos de confetti interactivos
- Scroll suave para navegación
- Observer para animaciones al scroll
- Navegación con teclado (flechas)

## 🚀 Cómo Usar

### Abrir la Página
1. Simplemente abre `index.html` en tu navegador favorito
2. ¡Listo! La página está completamente funcional

### Personalizar Contenido

#### Cambiar Fotos
1. Coloca tus fotos en la carpeta `/imag`
2. Actualiza el array `galleryImages` en `script.js`:
   ```javascript
   const galleryImages = [
       'imag/tu-foto1.jpg',
       'imag/tu-foto2.jpg',
       // ... más fotos
   ];
   ```

#### Cambiar Música
1. Coloca tu archivo de audio en `/music`
2. Actualiza la ruta en `index.html`:
   ```html
   <audio id="audioPlayer">
       <source src="music/tu-cancion.mp3" type="audio/mpeg">
   </audio>
   ```

#### Cambiar Fecha de Aniversario
1. En `script.js`, busca esta línea:
   ```javascript
   const startDate = new Date(2014, 8, 15); // Cambiar estos números
   ```
2. Formáto: `new Date(año, mes-1, día)` (nota: mes es 0-11)

#### Cambiar Mensaje Personal
1. Abre `index.html`
2. Busca la sección `id="mensaje"`
3. Edita el texto entre los tags `<div lang="es">` (español) y `<div lang="en">` (inglés)

#### Agregar Video
1. Coloca tu video en `/videos/video.mp4`
2. La página detectará automáticamente su presencia

## 🎨 Personalización Avanzada

### Colores
- **Cyan primario**: `#0891b2`
- **Verde primario**: `#16a34a`
- Edita `:root` en `styles.css` para cambiar colores globales

### Animaciones
- Todas las animaciones están definidas en `styles.css`
- Puedes ajustar timing y easing según necesites

### Tipografía
- Fonts se cargan desde Google Fonts
- Cambiar en `<link>` del `<head>` en `index.html`

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor o dependencias externas
- Todo es vanilla HTML, CSS y JavaScript

## 📱 Navegación

**Desktop**:
- Usa el navbar fijo para navegar
- Navega la galería con flechas del teclado
- Usa el scroll suave para navegar

**Móvil**:
- Navbar colapsado (responsive)
- Botones táctiles grandes
- Scroll normal para navegar

## ✅ Checklist de Personalización

- [ ] Cambiar fotos en `/imag`
- [ ] Cambiar música en `/music`
- [ ] Cambiar fecha de aniversario
- [ ] Cambiar mensaje personal
- [ ] Agregar video (opcional)
- [ ] Probar en diferentes dispositivos

## 🎉 ¡Listo!

Tu página está completamente funcional y lista para compartir. Es una celebración digital hermosa de la amistad que merece ser vista y disfrutada.

---

**Hecho con ❤️ para celebrar las amistades que importan**
