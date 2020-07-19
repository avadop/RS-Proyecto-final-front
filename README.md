# FinalProyectRs
Este repositorio consta con el Front-end del proyecto final realizado para el Bootcamp impartido por Geekhubs para Ribera Salud. 
Se trata de una aplicación pensada para el sector sanitario con la que se pueden gestionar una serie de usuarios, ya sean pacientes o profesionales del sector. Incluye las operaciones básicas CRUD más el añadido de poder borrar todos los médicos.

## Tecnologías
El proyecto ha sido realizado con [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1 y, para la realización de esta primera parte, con [Json Server](https://github.com/typicode/json-server).

### Pre-requisitos
Para la correcta ejecución del proyecto en local es necesario tener instalado **Node.js**, el cual se puede obtener desde su [página oficial](https://nodejs.org/es/).

Se necesita instalar también **Json Server**:
```
npm install -g json-server
```

El último requisito para poder ejecutar el proyecto es instalar los paquetes necesarios en el repositorio descargado o clonado. Para ello, desde la carpeta donde se encuentra, se ejecuta:
```
npm install
```

### Ejecución
Para iniciar la base de datos con **json server** se debe ejecutar el siguiente comando indicando la ruta en la que se encuentra el archivo json que almacena los datos. En el caso de este proyecto desde la carpeta principal:
```
json-server --watch db/db.json
```

Para ejecutar el proyecto se utiliza con el comando de **angular**: 
```
ng serve
```

Una vez realizado lo anterior ya está listo para ser consultado el proyecto en la dirección  `http://localhost:4200/`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
