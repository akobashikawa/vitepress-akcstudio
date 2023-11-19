# Desarrollo Web

El desarrollo web está enfocado en el desarrollo de páginas web, sitios web y aplicaciones web.

**La web** es la parte de internet construida con _HTML_.

## Texto

El origen de la web se remonta hacia fines de la década de 1980, cuando [Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee) lideró un proyecto del [CERN](https://es.wikipedia.org/wiki/Organizaci%C3%B3n_Europea_para_la_Investigaci%C3%B3n_Nuclear) para ayudar a la comunidad de científicos a compartir sus publicaciones.

Se creó el lenguaje [HTML](https://www.w3schools.com/html/), con capacidades básicas para formatear el texto y hacer **hipervínculos**, o _links_ entre páginas, lo que permitía tejer una red de documentos donde se podía saltar fácilmente de uno a otro.

Esta red les pareció similar a una telaraña y se bautizó como _World Wide Web_ (_WWW_, o _La Web_).

Para navegar por la red de documentos se usa un programa llamado _browser_, donde se puede colocar la dirección de la página (o _URL_) y saltar a nuevas direcciones usando los links.

El uso de la web se liberó y pronto se extendió a otras comunidades académicas, universidades, y por todo el mundo.


## Estilos

Muchos medios de comunicación, como diarios y revistas, experimentaron publicar en la web e impulsaron mejoras en el lenguaje HTML.

Las **hojas de estilo** [CSS](https://www.w3schools.com/css/) aparecieron para permitir un manejo más eficiente del diseño gráfico de una página web.


## Acciones

Empresas como **Microsoft**, con [Internet Explorer](https://es.wikipedia.org/wiki/Internet_Explorer), y **Netscape**, con [Navigator](https://es.wikipedia.org/wiki/Netscape_Navigator), compitieron por tener el mejor browser, impulsando el desarrollo de [javascript](https://www.javascript.com/), un lenguaje de programación para manipular los componentes de una página web.

Así, HTML, CSS y Javascript se convirtieron en el trío necesario para construir una página web.


## Servers

El HTML de las páginas web es servida a los browsers desde computadoras llamadas **servidores web**.

Cada petición de un URL es resuelta por la web usando el protocolo _HTTP_, que determina qué servidor tiene alojada la página y conduce su respuesta hasta el browser que hizo la solicitud.


## Estático y dinámico

La forma más simple de hacer una página web es un archivo de texto HTML que es servido tal cuál.

Una forma más sofisticada de servir una página es con un programa que construya nuevo HTML cada vez que se necesita. Así, el contenido de la página es **dinámico**, cambiando según sea el caso.

Entre los lenguajes más populares para hacer esto están: [Perl](https://www.perl.org/), [Java](https://www.java.com/es/), [PHP](https://www.php.net/), [Python](https://www.python.org/) y Javascript (que gracias a [Node.js](https://nodejs.org/en/) también puede correr en el lado del servidor).

Los servidores con soporte para PHP suelen ser los más económicos y populares.


## Modelo Vista Controlador

Conforme se asumía el desarrollo de aplicaciones web más complejas, se adoptaron estrategias para manejar el código.

Modelo Vista Controlador (ó _MVC_) consiste en separar el código encargado de generar la página (**Vista**) del código que describe la **lógica del negocio** (**Modelo**) y del código que atiende las solicitudes (**Controlador**).

Esto ayuda a volver el código más comprensible y mantenible.


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


## Preferencias al desarrollar

- Evitar las soluciones caras si hay alguna más económica disponible.
	- Por ejemplo, es costoso e innecesario validar una idea con una infraestructura completa de producción corriendo.
		- Se corre el riesgo de que la validación no apruebe propuestas que han significado muchas horas y esfuerzo.
		- Hace costoso y doloroso cada cambio.
			- Crea resistencia al cambio.
	- Es mejor usar mockups para proveer data que aún no ha sido validada.
	- Es mejor usar bocetos para describir componentes que aún no han sido validados.
	- Es mejor usar descripciones para ideas que aún no han sido validadas.
- Que una solución no obstruya las siguientes.
- Es mejor implementar algo aproximado y que llegue a correr que buscar algo perfecto que no se logrará implementar.


## Agile

- En el **ambiente académico** (como el de los tutoriales), se usa un flujo de trabajo propio de **tareas** que son **determinadas** y **bien conocidas**.
- En el **mundo real**, lo usual es que haya **problemas indeterminados** y haya muchas partes **desconocidas**.
	  - También es frecuente la necesidad de **cambiar**, agrega o quitar, objetivos o características, en el transcurso del desarrollo.
- [Agile]([What is Agile? | Agile 101 | Agile Alliance](https://www.agilealliance.org/agile101/)) trata de **manejar la incertidumbre** y entregar lo mejor que se pueda producir, con los materiales disponibles, en el tiempo disponible.


## Contextos

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
	- Por ejemplo, no es util usar criterios de producción en el contexto de una idea.
	- En el contexto de una idea, se valida la idea de la solución.
	- En el contexto de un boceto, se valida si algo va o no va en cierta area aproximada.
	- En el contexto de una maqueta, se valida la disposición de los componentes.
	- En el contexto de la programación, se valida si los componentes se comportan como se espera.
	- En el contexto de producción, se valida si la solución funciona como se espera.
- Estos estados se aplican tanto para la aplicación en general como para cada feature que se desea implementar.
- Es normal que se tengan que repetir ciclos total o parcialmente mientras se van haciendo descubrimientos y va cobrando forma la solución.


## Desarrollando

- Se elige alguna parte relevante de la solución
- Se valida la idea
	- Frontend: en espera
	- Backend: en espera
- Se valida el boceto
	- Frontend: en espera
	- Backend: en espera
- Se valida la maqueta
	- Frontend
		- Se valida el componente colocado según el boceto
		- Se muestran datos hardcodeados
	- Backend
		- En espera
- Se valida la API
	- Frontend
		- Reemplazo datos hardcodeados por endpoints
	- Backend
		- Controladores: Provee endpoint con datos hardcodeados
		- Servicios: En espera
		- Repositorios: En espera
- Se valida business logic
	- Frontend: Usa endpoints
	- Backend
		- Controladores: Provee endpoint con datos del service
		- Servicios: Implementa business logic con datos hardcodeados
		- Repositorios: En espera
- Se valida datos
	- Frontend: Usa endpoints
	- Backend
		- Controladores: Provee endpoint con datos del service
		- Servicios: Implementa business logic con datos del repositorio
		- Repositorios: Datos mockup
- Se valida conectividad con base de datos
	- Frontend: Usa endpoints
	- Backend
		- Controladores: Provee endpoint con datos del service
		- Servicios: Implementa business logic con datos del repositorio
		- Repositorios: Base de datos
- Se sigue este esquema para cada feature y para la aplicación en general.



