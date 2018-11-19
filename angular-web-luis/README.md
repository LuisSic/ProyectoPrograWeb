# Proyecto Angular 6

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Comenzando

Para correr el programa en su computadora debe tomar en cuenta lo siguiente:

### Pre-Requisitos

Se debe contar con un editor de codigo para visualizar el proyecto, ya sea Sublime Text, Atom, para este caso recomiendo Visual Studio Code que es una poderosa herramienta.

Tambien se podria instalar docker en la computadora en el caso de que se quiera tener en contenedores el proyecto.

### Instalación

En la consola del editor que se utilizando se debe ingresar a la carpeta angular-web-luis y ejecutar el siguiente comando, para instalar todas las dependencias del proyecto.

```
npm install 
```
En el archivo data.service.ts se debe colocar la url del api del proyecto.

```
baseURL: 'http://localhost:3000/videogame' 
```

### Ejecutar Aplicación

Ejecute el comando `ng serve` en la cosola. Navegue hacia `http://localhost:4200/`. La pagina web estará corriendo en esa direccion url.

### Build

Ejecute el comando `ng build --prod` para hacer el build del proyecto. Se generará una carpeta `dist/angular-web-luis`.

### Docker image

Para crear una imagen del proyecto se debe ingresar a la carpeta `angular-web-luis` y ejecutar el siguiente comando.

```
docker image build -t <nombreimagen> .
```
Con esto se creara una imagen del proyecto usando la configuracion que se encuentra en el dockerfile del proyecto.

Si se esta utilizando docker para el proyecto, cabe resaltar que si el proyecto es editado y para ver reflejados los cambios, se debera generar nuevamente el build del proyecto y crear la imagen nuevamente.

## Autor

* **Luis Antonio Sic**


