# Manual de Tecnocracia Española

Este documento sirve como una guía completa para ejecutar la aplicación Angular **Tecnocracia Española** en tu computadora.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js y npm](https://nodejs.org/)
- [Angular CLI](https://angular.dev/cli)
- [Visual Studio Code](https://code.visualstudio.com/docs/setup/windows) es el editor de codigo que recomiendo ya que es el que utilizo para el front end.

## Descarga del Proyecto

Sigue estos pasos para descargar y configurar el proyecto:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tecnocracia-espanola/tecnocracia-espanola.es.git
    ```

2. Accede al directorio del proyecto:

    ```bash
    cd tecnocracia-espanola.es
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Servidor de Desarrollo

Para ejecutar el servidor de desarrollo:

1. Inicia el servidor:

    ```bash
    npm run start
    ```

2. Abre tu navegador y navega a:

    ```
    http://localhost:4200/
    ```

## Creación de Elementos de Código

Usa los siguientes comandos para generar elementos de Angular:

- Generar un nuevo componente:

    ```bash
    ng generate component nombre-componente
    ```

- Generar otros elementos (directiva, pipe, servicio, etc.):

    ```bash
    ng generate directive|pipe|service|class|guard|interface|enum|module nombre-elemento
    ```

## Compilación del Proyecto

Para compilar el proyecto para producción:

1. Ejecuta el comando de compilación:

    ```bash
    ng build
    ```

2. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Ejecuta las pruebas unitarias usando Karma con:

```bash
ng test
```

## Ejecución de Pruebas End-to-End

Para ejecutar pruebas end-to-end:

1. Asegúrate de tener instalado un paquete adecuado para pruebas e2e.
2. Ejecuta las pruebas e2e:

    ```bash
    ng e2e
    ```

## Subir Código al Repositorio

Para subir tus cambios a GitHub:

1. Prepara los cambios:

    ```bash
    git add .
    ```

2. Realiza un commit de tus cambios:

    ```bash
    git commit -m "Mensaje de tu commit"
    ```

3. Sube los cambios a la rama principal:

    ```bash
    git push origin main
    ```

## Ayuda Adicional

Para comandos adicionales y ayuda sobre Angular CLI, usa:

```bash
ng help
```


<br><br><br><br>
<br><br><br><br>


# Tecnocracia Española Manual (English)

This document serves as a comprehensive guide to running the **Tecnocracia Española** Angular application on your computer.

## Prerequisites

Before starting, ensure the following are installed on your system:

- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://angular.dev/cli)

## Downloading the Project

Follow these steps to download and set up the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/tecnocracia-espanola/tecnocracia-espanola.es.git
    ```

2. Navigate into the project directory:

    ```bash
    cd tecnocracia-espanola.es
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Development Server

To run the development server:

1. Start the server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:4200/
    ```

## Code Scaffolding

Use the following commands to generate Angular elements:

- Generate a new component:

    ```bash
    ng generate component component-name
    ```

- Generate other elements (directive, pipe, service, etc.):

    ```bash
    ng generate directive|pipe|service|class|guard|interface|enum|module element-name
    ```

## Building the Project

To build the project for production:

1. Execute the build command:

    ```bash
    ng build
    ```

2. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run unit tests using Karma with:

```bash
ng test
```

## Running End-to-End Tests

To execute end-to-end tests:

1. Ensure an appropriate e2e testing package is installed.
2. Run the e2e tests:

    ```bash
    ng e2e
    ```

## Pushing Code to the Repository

To push your changes to GitHub:

1. Stage your changes:

    ```bash
    git add .
    ```

2. Commit your changes:

    ```bash
    git commit -m "Your commit message"
    ```

3. Push the changes to the main branch:

    ```bash
    git push origin main
    ```

## Further Help

For additional commands and help on Angular CLI, use:

```bash
ng help
```

<br><br><br><br>
<br><br><br><br>

Contact: misty.ages@gmail.com
