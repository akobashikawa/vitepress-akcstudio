# Hands-On Machine Learning with Javascript

- Burak Kenber: "Hands-On Machine Learning with Javascript", 2018

## 1. Exploring the Potential of JavaScript

### Why Javascript

- **Javascript** ha ido ascendiendo como lenguaje más popular en la web
	- Prototype Javascript Framework introdujo la notación $() para reemplazar a document.getElementById()
	- jQuery uniformizó la manipulación del DOM, AJAX y efectos
	- La iniciativa CommonJS, con NodeJS, llevo Javascript más allá del navegador como server-side language
	- El registro npm agiliza la publicación y descubrimiento de módulos
- **Python** suele ser el lenguaje preferido para ML y tiene una amplia biblioteca
- Sin embargo, los algoritmos de ML se pueden implementar en cualquier lenguaje, como javascript.
- Aunque Python tiene una popularidad ganada, javascript se está volviendo más atractivo para proyectos ML.

### Why machine learning, why now?

- Aunque técnicas ML se remontan a los 1970s y 1980s, no eran prácticas en ese momento.
- La tecnología actual provee la potencia para usarlas con fines prácticos.
	- Además **AWS** democratiza el escalamiento de recursos.
- **EC2**, de AWS, democratiza la potencia de cómputo.
- **TensorFlow**, de Google, democratiza las redes neurales.
- La democratización de ML lleva a las empresas a un nuevo tipo de competencia.
- Cada nuevo mercado creará una demanda de nuevos desarrolladores ML.
- Estamos en camino a un boom en Inteligencia Artificial (AI).

### Advantages and challenges of JavaScript

- Javascript tiene sus ventajas y desventajas.
- Historicamente, se le han criticado algunas de sus características poco comunes y desconcertantes para muchos programadores.
	- Que tiene sentido para aquellos con experiencia en programación funcional.
	- Las quejas vienen generalmente por aquellos con experiencia sólo en OOP.
- Sin embargo, con la llegada de **NodeJS**, que lo habilita para desarrollo en el lado del servidor; **Electron**, que lo habiita para desarrollo de aplicaciones de escritorio; y **React Native**, que lo habilita para desarrollo de aplicaciones mobile, Javascript se ha convertido en un **lenguaje de propósito general** y **multiplataforma**.
- Aunque Python tiene la predominancia en ML, la tendencia es que Javascript seguirá avanzando para alcanzarlo, tarde o temprano.
- Actualmente, puede ser un desafío ir incorporando ML a javascript y dejar una semilla para la siguiente generación de investigadores ML.

### The CommonJS initiative

- Se había advertido que para que javascript pueda correr en el lado del servidor, necesitaria de ayuda para acceso a disco, base de datos y un sistema de módulos.
- La iniciativa **CommonJS** resolvió esas cuestiones.

### Node.js

- El surgimiento de **Node.js** es uno de los más importantes en la historia de Javascript.
- **Chrome** desarrolló la máquina **V8** y una forma de compilación Just in Time para ejecutar javascript.
- Node.js tomó V8 y le agregó un sistema de manejo de eventos, acceso a disco y lo que necesitaba para que pudiera funcionar en un servidor.
- Su forma de manejo a eventos, con un **único ciclo de eventos** que maneja muchas solicitudes concurrentes, favorece la asincronicidad y la programación por eventos.
	- Ha sido clave para su adopción y éxito.
- Otro ingrediente clave ha sido el registro **npm** que permite que los desarrolladores puedan usar fácilmente código compartido por otros desarrolladores.
- Node.js ha permitido que frontend y backend puedan ser desarrollados en el mismo lenguaje y por los mismos desarrolladores.
- Innovaciones en Javascript han permitido el desarrollo de conceptos como *isomorphic applications*, *single page applications* y *serverless*.
- Además, proyectos como **Cordova/PhoneGap**, han permitido que javascript pueda ser envuelto como componente en aplicaciones mobile.

### TypeScript language

- **Microsoft** desarrollo **Typescript** para introducir un javascript con clases, interfaces y tipado estático, que puede facilitar la construcción de IDEs y el desarrollo **OOP** en gran escala.
- A diferencia de **Dart**, Microsoft se ha asegurado que Typescript sea un **superconjunto de Javascript**.
	- Código javascript es código Typescript válido.
- Algunas de las propuestas de Typescript han venido siendo implementadas por ES6.
- Typescript requiere un proceso de build para transformarse en javascript ejecutable.

### Improvements in ES6

- El comité **ECMAScript** define la especificación para el lenguaje Javascript.
	- **ES5** es el estandar actual.
- La especificación **ES6** indica una serie de mejoras que los fabricantes de navegadores se encargarían de implementar.
- Como la implementación tarda, los desarrolladores echan mano de herramientas de traspilación, como **Babel**, que les permite programar en javascript futuro y compilarla hacia javascript actual ES5.
- Let and const
	- **var** define una variable que es la misma independiente del contexto
	- **let** define una variable que es diferente en cada contexto
	- **const** define una constante a la que no se puede asignar un nuevo valor
		- Sin embargo, una constante puede tener partes variables
	- La recomendación suele ser usar const tanto como se pueda, luego let y luego var.
- Classes
	- La ausencia de clases y la herencia por prototipos suelen parecer poco intuitivos para muchos desarrolladores.
	- ES6 agrega clases y herencia de modo similar a OOP.
	- Sin embargo, es sólamente syntactic sugar, internamente se sigue usando la herencia por prototipos.
- Module imports
	- ES6 define import y export para los módulos.
	- CommonJS usaba require() y modules.export.
- Arrow functions
	- Es syntactic sugar para escribir funciones de modo más suscinto.
	- Tienen el contexto heredado, de modo que el contexto de la variable **this** se conserva dentro de la función arrow.
- Object literals
	- Si el nombre de una variable es el mismo que el de una propiedad, se puede omitir.
	- El operador **spread** (`...`) facilita hacer referencia a los items de un objeto
- The for...of function
	- Facilita hacer referencia a los items de un enumerable.
- Promises
	- Una **promise** es una referencia a una variable asíncrona cuyo valor estará disponible en el futuro.
	- Las promises pueden pasarse como objetos y sus manejadores pueden ser encadenados.
- The async/await functions
	- Es parte de **ES8**
	- Es syntactic sugar que facilita el uso de llamadas asíncronas.

### Preparing the development environment

- Para poder usar ES6 de manera segura, usaremos herramientas como Babel y Browserify.
- Installing Node.js
	- Usaremos node 9.4.0 o superior
	- node --version
	- npm --version
- Optionally installing Yarn
	- Yarn es un manejador de paquetes similar a npm, pero más rápido y fácil de usar.
	- Yarn y npm usan diferentes comandos equivalentes pero interactúan con el mismo package.json
- Creating and initializing an example project
	- babel-core
		- el transpilador
	- babel-preset-env
		- permite usar ES6, ES7 y ES8
	- browserify
		- hace un bundle
	- babelify
		- plugin de Babel para Browserify
	- yarn add -D babel-cli browserify babelify babel-preset-env
		- npm install --save babel-cli browserify babelify babel-preset-env
	- Usaremos la convención de colocar la fuente en *src* y el resultado en *dist*
	- NOTA:
		- Esto ya está desactualizado
		- Node 18 soporta import/export si se coloca "type": "module" en el package.json
- Creating a Hello World project
	- node index.js
	- node index.js "good readers"