# Notes: HTML y Servidores Web

## Objetivo

Estudiar los conceptos principales de HTML y servidores web de forma simple, con ejemplos y práctica.

---

# Parte 1: HTML Básico

## 1. HTML

### Concepto

HTML significa **HyperText Markup Language** o **Lenguaje de Marcado de Hipertexto**.

HTML no es un lenguaje de programación. Es un lenguaje de marcado que sirve para **estructurar el contenido de una página web**.

### Ejemplo

```html
<p>Hola, esta es mi primera página web.</p>
```

### Recuerda

HTML organiza el contenido.  
CSS da estilo.  
JavaScript agrega lógica e interacción.

---

## 2. Elemento HTML

### Concepto

Un elemento HTML está formado por:

- Etiqueta de apertura
- Contenido
- Etiqueta de cierre

### Ejemplo

```html
<p>Mi gato es muy gruñón</p>
```

### Explicación

| Parte | Ejemplo |
|---|---|
| Etiqueta de apertura | `<p>` |
| Contenido | `Mi gato es muy gruñón` |
| Etiqueta de cierre | `</p>` |


---

## 3. Etiquetas HTML

### Concepto

Las etiquetas le indican al navegador qué tipo de contenido se está usando.

### Ejemplo

```html
<h1>Título principal</h1>
<p>Este es un párrafo.</p>
```

### Recuerda

Las etiquetas se escriben entre signos menor y mayor:

```html
<etiqueta>
```

---

## 4. Atributos HTML

### Concepto

Los atributos dan información extra a una etiqueta.

Siempre se colocan en la etiqueta de apertura.

### Ejemplo

```html
<img src="imagen.png" alt="Descripción de la imagen">
```

### Atributos importantes

| Atributo | Función |
|---|---|
| `src` | Indica la ruta de una imagen o archivo |
| `alt` | Describe una imagen |
| `href` | Indica la dirección de un enlace |

---

## 5. Anidamiento

### Concepto

Anidar significa colocar un elemento dentro de otro.

### Ejemplo correcto

```html
<p>Mi gato es <strong>muy</strong> gruñón.</p>
```

### Ejemplo incorrecto

```html
<p>Mi gato es <strong>muy gruñón.</p></strong>
```

### Recuerda

La última etiqueta que se abre debe ser la primera que se cierra.

---

## 6. Elementos vacíos

### Concepto

Son elementos que no tienen contenido ni etiqueta de cierre.

### Ejemplo

```html
<img src="imagen.png" alt="Una imagen de ejemplo">
<br>
<hr>
```

### Recuerda

`<img>` es un elemento vacío porque no encierra texto.

---

## 7. Estructura básica de un documento HTML

### Concepto

Todo documento HTML tiene una estructura general.

### Ejemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <p>Esta es mi primera página.</p>
  </body>
</html>
```

### Partes importantes

| Etiqueta | Función |
|---|---|
| `<!doctype html>` | Indica que el documento es HTML5 |
| `<html>` | Encierra toda la página |
| `<head>` | Contiene información no visible directamente |
| `<meta charset="utf-8">` | Permite usar tildes, ñ y caracteres especiales |
| `<title>` | Título que aparece en la pestaña del navegador |
| `<body>` | Contenido visible de la página |

---

## 8. Imágenes

### Concepto

Para insertar imágenes se usa la etiqueta `<img>`.

### Ejemplo

```html
<img src="firefox.png" alt="Logo de Firefox">
```

### Recuerda

El atributo `alt` sirve para:

- Describir la imagen.
- Ayudar a usuarios con lectores de pantalla.
- Mostrar texto si la imagen no carga.
- Mejorar la accesibilidad.

---

## 9. Encabezados

### Concepto

Los encabezados sirven para crear títulos y subtítulos.

HTML tiene seis niveles de encabezados: desde `<h1>` hasta `<h6>`.

### Ejemplo

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Tema específico</h3>
```

### Recuerda

No uses encabezados solo para agrandar texto. Úsalos para organizar el contenido.

---

## 10. Párrafos

### Concepto

Los párrafos se crean con la etiqueta `<p>`.

### Ejemplo

```html
<p>HTML es importante para crear páginas web.</p>
```

---

## 11. Listas

### Concepto

Las listas sirven para organizar información.

Hay dos tipos principales:

- Listas desordenadas
- Listas ordenadas

### Lista desordenada

Se usa cuando el orden no importa.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Lista ordenada

Se usa cuando el orden sí importa.

```html
<ol>
  <li>Abrir el editor de código</li>
  <li>Crear un archivo HTML</li>
  <li>Escribir la estructura básica</li>
</ol>
```

### Recuerda

Cada elemento de una lista se escribe con `<li>`.

---

## 12. Enlaces

### Concepto

Los enlaces permiten ir de una página a otra.

Se crean con la etiqueta `<a>` y el atributo `href`.

### Ejemplo

```html
<a href="https://www.mozilla.org">Visitar Mozilla</a>
```

### Explicación

| Parte | Función |
|---|---|
| `<a>` | Crea el enlace |
| `href` | Indica la dirección de destino |
| Texto entre etiquetas | Es lo que el usuario puede hacer clic |

### Práctica

Crea un enlace hacia una página web que uses frecuentemente.

---

## 13. Estructura general y estructura semántica

### Concepto: estructura general

Es la base mínima de un documento HTML.

### Ejemplo

```html
<html>
  <head></head>
  <body></body>
</html>
```

### Concepto: estructura semántica

Usa etiquetas que explican el significado de cada parte de la página.

### Ejemplo

```html
<header>
  <h1>Mi sitio web</h1>
</header>

<nav>
  <a href="#">Inicio</a>
</nav>

<main>
  <section>
    <h2>Noticias</h2>
    <article>
      <p>Contenido de la noticia.</p>
    </article>
  </section>
</main>

<footer>
  <p>Derechos reservados</p>
</footer>
```

### Etiquetas semánticas importantes

| Etiqueta | Significado |
|---|---|
| `<header>` | Cabecera de la página o sección |
| `<nav>` | Menú de navegación |
| `<main>` | Contenido principal |
| `<section>` | Sección temática |
| `<article>` | Contenido independiente |
| `<footer>` | Pie de página |

### Recuerda

La estructura general organiza el documento.  
La estructura semántica explica qué representa cada parte.

---

# Parte 2: Servidores Web

## 14. Servidor web

### Concepto

Un servidor web puede ser hardware, software o ambos trabajando juntos.

Su función es almacenar archivos de un sitio web y entregarlos al navegador cuando el usuario los solicita.

### Ejemplo

Cuando escribes una URL en el navegador, el navegador pide una página al servidor.

```txt
Navegador → solicita página → Servidor
Servidor → envía página → Navegador
```

---

## 15. Servidor web como hardware

### Concepto

Como hardware, un servidor web es una computadora que almacena los archivos de un sitio.

### Ejemplo

```txt
servidor/
├── index.html
├── style.css
├── logo.png
└── script.js
```

### Recuerda

El servidor debe estar conectado a internet para que otros dispositivos puedan acceder al sitio.

---

## 16. Servidor web como software

### Concepto

Como software, un servidor web es un programa que recibe solicitudes y entrega archivos.

### Ejemplo

Un servidor HTTP recibe una solicitud de `index.html`, busca el archivo y lo envía al navegador.

### Recuerda

El servidor HTTP entiende URLs y HTTP.

---

## 17. Cliente y servidor

### Concepto

El cliente normalmente es el navegador.

El servidor es quien guarda y entrega los archivos.

### Ejemplo

```txt
Cliente: navegador
Servidor: computadora o sistema que guarda el sitio web
```

### Recuerda

El cliente solicita.  
El servidor responde.

---

## 18. HTTP

### Concepto

HTTP significa **HyperText Transfer Protocol** o **Protocolo de Transferencia de Hipertexto**.

Es el conjunto de reglas que permite la comunicación entre el navegador y el servidor.

### Ejemplo

```txt
El navegador hace una solicitud HTTP.
El servidor responde con el archivo solicitado.
```

### Recuerda

HTTP es textual y sin estado.

- Textual: usa comandos de texto plano.
- Sin estado: no recuerda comunicaciones anteriores por sí solo.

---

## 19. URL

### Concepto

Una URL es la dirección de un recurso en internet.

### Ejemplo

```txt
https://www.mozilla.org/es-AR/about/manifesto/
```

### Recuerda

El navegador usa la URL para saber qué recurso pedir al servidor.

---

## 20. ¿Qué pasa cuando visitas una página web?

### Concepto

Cuando visitas una página, ocurre una comunicación entre cliente y servidor.

### Proceso

```txt
Escribes una URL
↓
El navegador envía una solicitud HTTP
↓
El servidor recibe la solicitud
↓
El servidor busca el archivo
↓
Si lo encuentra, lo envía
↓
El navegador muestra la página
```

### Si no encuentra el archivo

```txt
El servidor devuelve: 404 Not Found
```

---

## 21. Error 404

### Concepto

El error 404 aparece cuando el servidor no encuentra el archivo solicitado.

### Ejemplo

```txt
Navegador pide: pagina-inexistente.html
Servidor responde: 404 Not Found
```

### Recuerda

404 significa recurso no encontrado.

---

## 22. Hosting

### Concepto

El hosting o alojamiento web es el lugar donde se guardan los archivos de un sitio para que estén disponibles en internet.

### Ejemplo

```txt
index.html
style.css
imagenes/
videos/
```

### Un buen hosting debe estar

- Siempre encendido.
- Siempre conectado a internet.
- Con una dirección IP estable.
- Correctamente mantenido.

---

## 23. Servidor estático

### Concepto

Un servidor estático entrega los archivos tal como están guardados.

### Ejemplo

```html
<h1>Bienvenido</h1>
```

El servidor envía ese archivo sin modificarlo.

### Recuerda

Estático significa que se sirve “tal como está”.

---

## 24. Servidor dinámico

### Concepto

Un servidor dinámico puede generar o modificar contenido antes de enviarlo al navegador.

Normalmente usa una aplicación del servidor y una base de datos.

### Ejemplo

```txt
Base de datos → Aplicación del servidor → HTML generado → Navegador
```

### Recuerda

Dinámico significa que el contenido puede cambiar según datos, usuarios o condiciones.

---

## 25. Estático vs dinámico

| Tipo | Concepto | Ejemplo |
|---|---|---|
| Estático | Entrega archivos sin modificarlos | Página informativa |
| Dinámico | Genera o modifica contenido | Tienda en línea, blog, Wikipedia |

---
