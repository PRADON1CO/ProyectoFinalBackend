# Backend de Fit Factory

Este proyecto es el backend de la aplicación web sobre un GYM.

## Descripción

Este backend se encarga de manejar la lógica del servidor y la comunicación con la base de datos para la aplicación del GYM.

## Alcance del proyecto

El alcance de este proyecto se centra en realizar todos los pasos del CRUD y deberá contar con un login con diferentes opciones dependiendo el usuario que este logueado. Se considera que solo el usuario administrador podrá administrar las diferentes opciones de menú.

## Integración con proyecto de Frontend

Este proyecto de Backend se integró a su proyecto Frontend correspondiente.

#### Repositorio Frontend: [ProyectoFinalRC-Front](https://github.com/PRADON1CO/ProyectoFinalRC-Front)

## Tecnologías Utilizadas

<a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript (ES6+)" title="JavaScript (ES6+)" width="48" height="48"/></a>
<a href="https://nodejs.org/"><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png" alt="Node.js"   title="Node js" width="50"></a>
<a href="https://www.mongodb.com/"><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="MongoDB" title="MongoDB" width="60"></a>
<a href="https://mongoosejs.com/"><img src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" alt="Mongoose" title="Mongoose" width="75"></a>

* ### Otras:

    - [Express js](https://expressjs.com/es/)
    - [Express-validator](https://express-validator.github.io/docs/guides/getting-started)


## Endpoints API

- /api/clases
    * Endpoint para gestionar clases del GYM, incluyendo la visualización y creación (POST) de clases.
- /api/clases/:id
    * Endpoint para obtener información detallada de una clase específico y también para editar (PUT) o eliminar (DELETE) dicho clases.

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).
- MongoDB instalado y en ejecución en el sistema o conexión a una instancia de MongoDB en la nube.

## Instalacion y uso

1. Clona este repositorio en tu máquina local a través de una terminal:

  * git clone <[url-del-repositorio](https://github.com/PRADON1CO/ProyectoFinalBackend/tree/main)>

2. Navega al directorio del proyecto:

  * cd ProyectoFinalBackend

3. Instala las dependencias del proyecto:

  * npm install o npm i

4. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Aquí hay un ejemplo:

* PORT = un puertodisponible en tu pc (Ej: 3000)
* MONGODB_URI = url

## Autores

_Lopez Esteban_
- Github: https://github.com/elopezgit

_Valdez Natasha Micaela_

- Github: https://github.com/Valdez-Natasha

_Prado Brian Nicolas_

- Github: https://github.com/PRADON1CO

## 📞 Contactanos

| Medio    | Link                                   |
| -------- | -------------------------------------- |
| Email    | fitfactory@gmail.com                   |
| Twitter  | https://twitter.com/FitFactory         |
| Linkedin | https://www.linkedin.com/in/FitFactory |