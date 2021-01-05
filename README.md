# ContactoApp

core:
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
 Angular CLI: 11.0.1.   
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

Clonar el Proyecto
```
$ git clone https://github.com/amdreew/contactoApp
```
Intalar Dependecias NPM
```
$ npm i
```
Levantar el Servicio Angular
```
$ ng serve [--hmr]
```
# CONSTRUIR CONTENEDOR PARA PRODUCCIÓN

REQUERIMIENTIS
```
 Docker - Docker-Compose
```
1: Generara la imagen del software
```
$ docker build -t contacto_app:latest .
```
2: Levantar el contenedor con su respectivo puerto de entrada y salida
```
$ docker run -d -p 8080:80 contacto_app:latest
```
# ELEININAR EL PROBLEMA DEL LIMITE DE ARCHIVOS VSCODE SISTEMAS UNIX

EJECUTAR EL SIGUIENTE COMANDO
```
>> sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

