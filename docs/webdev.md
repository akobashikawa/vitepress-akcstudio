# Desarrollo Web

El desarrollo web está enfocado en páginas web, sitios web y aplicaciones web.

**La web** es, básicamente, la parte de internet construida en torno a contenido _HTML_.

[Breve Historia de la Web](web-historia)


## Páginas, sitios, aplicaciones

Primero se trató de **páginas web** (_web pages_), documentos de hipertexto.

Luego, se trató de **sitios web** (_web sites_), que es un conjunto de páginas relacionadas. Por ejemplo, el site de una revista.

Después, se trató de **aplicaciones web** (_web apps_), que es un sitio web organizado como una aplicación, con la que puede interactuar el usuario. Por ejemplo, una tienda online.


## Servers

El código HTML de las páginas web es servido a los browsers desde computadoras llamadas **servidores web**.

::: info
Cada servidor web tiene un **ip**, que es un conjunto de números que permite localizarlo.

También puede tener un **dominio**, que es un nombre que se puede usar en lugar del ip.

Cada página y recurso web tiene un **URL**, que es la dirección que permite localizarla en la web.
:::

El browser es un interprete que procesa el código que recibe para construir la página web que vemos.

::: info
Aunque HTML no es un lenguaje de programación _imperativo_, como C o Java, es un lenguaje de programación _declarativo_, que usa etiquetas para indicar lo que hay que hacer. 
:::

Cada petición de un URL es resuelta por la web usando el protocolo _HTTP_, que determina qué servidor tiene alojada la página y conduce su respuesta hasta el browser que hizo la solicitud.

::: info
**Hosting** es el servicio de alojar contenido web.

El hosting de un servidor windows es más caro por el pago de las licencias involucradas.

En comparación, el hosting de un servidor linux es mucho más económico.

Los servicios de hosting más populares y económicos son los que corren en un servidor linux compartido y ofrecen soporte directo para PHP.
:::


::: tip
Un **VPS** (Virtual Private Server) es una solución más elegante y estable, y tan económica, como el hosting compartido, aunque requiere mayor conocimiento técnico para manejarlo.

En un VPS, se puede instalar soporte para PHP, Java, Node, etc, además de herramientas y aplicaciones que normalmente no están disponibles en el hosting compartido. También suele tener opciones para manejar dominios y subdominios, entre otras cosas.
:::

## Estático y dinámico

La forma más simple de hacer una página web es un archivo de texto HTML que es servido tal cuál.

Una forma más sofisticada de servir una página es con un programa que construya nuevo HTML cada vez que se necesita. Así, el contenido de la página es **dinámico**, cambiando según sea el caso.

Entre los lenguajes más populares para hacer esto han figurado: [Perl](https://www.perl.org/), [Java](https://www.java.com/es/), [PHP](https://www.php.net/), [Python](https://www.python.org/) y [Javascript](https://www.javascript.com/) (que gracias a [Node.js](https://nodejs.org/en/) también puede correr en el lado del servidor).


::: info
### Modelo Vista Controlador

Conforme se asumía el desarrollo de aplicaciones web más complejas, se adoptaron estrategias para manejar el código.

Modelo Vista Controlador (ó _MVC_) consiste en separar el código encargado de generar la página (**Vista**) del código que describe la **lógica del negocio** (**Modelo**) y del código que atiende las solicitudes (**Controlador**).

Esto ayuda a volver el código más comprensible y mantenible.
:::


## Web 2.0

Se denominó así a la web que surgió cuando los usuarios pudieron **afectar activamente el contenido**, en lugar de simplemente consumirlo pasivamente.

**Wikis** (catálogo comunitario), **blogs** (diarios personales), y **CMS** (administradores de contenido), son tipos de aplicaciones que permiten subir contenido propio.

Hay además redes sociales, como **Facebook**, **Youtube**, **Instagram**, y **TikTok**, que facilitan la publicación de contenido multimedia.


## AJAX

Normalmente, una solicitud web recibe una respuesta que hace que el browser actualice la vista completa de la página.

[AJAX](https://www.w3schools.com/xml/ajax_intro.asp) es una técnica javascript que permite que el navegador pueda actualizar partes de la vista de manera independiente.

Esto animó a los desarrolladores a hacer aplicaciones que puedan sentirse más como una aplicación de escritorio, sin los parpadeos y recargas propias de una página web tradicional.


## Frontend y Backend

AJAX también permitió que se pueda separar completamente el desarrollo de la interfaz de usuario por un lado (_frontend_), y que por otro lado el servidor pueda especializarse en realizar la lógica del negocio y proveer los datos (_backend_).

Frameworks javascript como [Meteor](https://www.meteor.com/), [Angular](https://angular.io/), [React](https://react.dev/) y [Vue](https://vuejs.org/) han permitido construir **SPA** ([Single Page Application](https://es.wikipedia.org/wiki/Single-page_application)) que es una aplicación web cuyo HTML es generado por javascript, dinámicamente, en el browser.

**[Node.js](https://nodejs.org/en/)** es javascript corriendo en el lado del servidor. Así, actualmente es posible construir aplicaciones web, frontend y backend, usando un único lenguaje de programación e incluso compartiendo bibliotecas.

**[Bun.js](https://bun.sh/)** ha aparecido como alternativa a Node.js. Compatible y más rápida.


## Agile

- En el **ambiente académico** (como el de los tutoriales), se usa un flujo de trabajo propio de **tareas** que son **determinadas** y **bien conocidas**.
- En el **mundo real**, lo usual es que haya **problemas indeterminados** y haya muchas partes **desconocidas**.
	  - También es frecuente la necesidad de **cambiar**, agrega o quitar, objetivos o características, en el transcurso del desarrollo.
- [Agile]([What is Agile? | Agile 101 | Agile Alliance](https://www.agilealliance.org/agile101/)) trata de **manejar la incertidumbre** y entregar lo mejor que se pueda producir, con los materiales disponibles, en el tiempo disponible.

::: tip
### Procesos sobre productos

Aunque el motivo es el software, centrarse en el software no suele ser la mejor estrategia.

Para repetirlo, más importante que el software es el proceso para realizar el software.

:::

::: tip
### Al desarrollar:

- Evitar las soluciones caras si hay alguna más económica disponible.
	- Por ejemplo, suele ser costoso e innecesario validar una idea con una infraestructura completa corriendo.
		- Hace costoso y doloroso cada cambio.
			- Crea resistencia al cambio.
	- Es mejor dividir el desarrollo en etapas que permitan validaciones parciales más económicas.
	- Es mejor usar **descripciones** para ideas que aún no han sido validadas.
	- Es mejor usar **bocetos** para describir componentes que aún no han sido validados.
	- Es mejor usar **mockups** para proveer data que aún no ha sido validada.
- Que una solución no obstruya las siguientes soluciones.
- Es mejor implementar algo aproximado y que llegue a correr que buscar algo perfecto que no se logrará implementar.
:::


::: info
### Contextos

- Se puede considerar los siguientes estados:
	- Idea
	- Boceto
	- Maqueta
	- Programación
	- Producción
- Cada estado determina un **contexto**, o **conjunto de consideraciones**.
- Para pasar al siguiente estado se necesita una **validación** en el estado presente.
	- La idea debe ser validada antes de pasar a hacer el boceto
	- El boceto debe ser validado antes de pasar a hacer la maqueta
	- La maqueta debe ser validada antes de pasar a programar
	- La programación debe ser validada antes de pasar a producción
- Los criterios de evaluación son determinados por el estado
	- Por ejemplo, no es útil usar criterios de producción en el contexto de una idea.
	- En el contexto de una idea, se valida la idea de la solución.
	- En el contexto de un boceto, se valida si algo va o no va en cierta area aproximada.
	- En el contexto de una maqueta, se valida la disposición de los componentes.
	- En el contexto de la programación, se valida si los componentes se comportan como se espera.
	- En el contexto de producción, se valida si la solución funciona como se espera.
- Estos estados se aplican tanto para la aplicación en general como para cada feature que se desea implementar.
- Es normal que se tengan que repetir ciclos total o parcialmente mientras se van haciendo descubrimientos y va cobrando forma la solución.
:::


::: tip
### Desarrollo progresivo

- Se elige alguna parte relevante de la solución
- Se valida la idea
- Se valida el boceto
- Se valida la maqueta
	- Frontend
		- Se muestran datos hardcodeados
- Se valida la API
	- Frontend
		- Se muestran datos provenientes de endpoints
	- Backend
		- Controladores: Provee endpoint con datos hardcodeados
- Se valida business logic
	- Backend
		- Controladores: Provee endpoint con datos de servicios
		- Servicios: Implementa business logic con datos hardcodeados
- Se valida datos
	- Backend
		- Controladores: Provee endpoint con datos de servicios
		- Servicios: Implementa business logic con datos del repositorio
		- Repositorios: Datos hardcodeados
- Se valida conectividad con base de datos
	- Backend
		- Controladores: Provee endpoint con datos de servicios
		- Servicios: Implementa business logic con datos del repositorio
		- Repositorios: Base de datos
- Se sigue este esquema para cada feature y para la aplicación en general.

:::



