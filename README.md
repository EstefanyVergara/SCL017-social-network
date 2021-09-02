# ¿QUÉ COCINO HOY? 

## Índice

* [1. Red Social ¿Qué cocino hoy?](#1-red-social-¿qué-cocino-hoy?)
* [2. Perfil de Usuario](#2-perfil-de-usuario)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipos](#4-prototipos)
* [5. Interfaz](#5-interfaz)


## 1. Red Social ¿Qué cocino hoy?

¿Qué cocino hoy? es una red social diseñada para recibir ayuda de parte de otros usuarios que también han tenido dificultades al momento de escoger que cocinar. La diferencia entre otras aplicaciones de cocina es que los usuarios deben preguntar recetas a partir de lo que tengan disponible en sus casas y no comprando los ingredientes que falten. 

Gracias a la posibilidad de compartir y ayudar a los demás en esta tarea que se torna tan complicada en ocasiones es que esta comunidad podrá crecer de manera favorable. 



## 2. Perfil de usuario

#### -¿Quiénes son los principales usuarios del producto?

Enfocada para cualquier persona que tenga acceso a internet y necesite opciones e ideas para cocinar algo con lo que tenga independiente de la hora que sea. 

#### -¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Los objetivos de nuestros usuarios es poder encontrar una guía a partir de lo que han hecho otras personas que han estado en esta misma situación. 

#### -¿Cuáles son los componentes principales de la interfaz y por qué?

Lo más importante es que las personas puedan compartir post y fotografías de la comida que realizaron. Es importante ver el resultado obtenido para generar confianza y ganas de participar. 


## 3. Historias de usuario

### 1. “*Como* usuario *quiero* tener una cuenta en la red social *para* usarla exclusivamente en esta red Social”.

```
CRITERIOS DE ACEPTACIÓN:
- Dado quiero tener una cuenta
- Cuando ingreso mis datos de registro
- Entonces se guardar en la base de datos

DEFINICIÓN DE TERMINADO

-Permitir ingresar un correo electrónico y una contraseña en (input).
- Lo que se escriba en el campo (input) de contraseña debe ser secreto.
- Mostrar errores si el usuario escribe de forma incorrecta o no rellena campos. 
- Señalar al usuario que se ha enviado un correo de verificación de su cuenta.

```
### 2. "*Como* usuario *quiero* ingresar a la red social con mi cuenta de Google *para* entrar de forma rápida sin tener que registrarme”.

```
CRITERIOS DE ACEPTACIÓN:

- Dado que quiero ingresar sin registrarme
- Cuando aprieto el botón de Google 
- Entonces ingreso al feed. 

DEFINICIÓN DE TERMINADO

- Permitir ingresar con cuenta de Google.
- Tener un botón con metodo de ingreso en Firebase.

```

### 3. "*Como* usuario *quiero* publicar los ingredientes que tengo en casa *para* que la comunidad me diga que comida puedo preparar a partir de lo que tenía”.

```
CRITERIOS DE ACEPTACIÓN:

- Dado que ya inicié sesión y estoy en el feed
- Cuando ingrese texto en la cajita de publicación y presiono publicar
- Entonces mi publicación aparece en el feed.

DEFINICIÓN DE TERMINADO

- Guarda lo que el usuario escribe en Firebase.
- Mostrar lo que se publica en el muro.
- Editar la publicación si es que el usuario se equivoca
- Poder eliminar la publicación.

```



## 4. Prototipos


### Prototipo de baja fidelidad

En dispositivos: 

![protipo de baja](src/img/bajafid.png)
En desktop: 
![protipo de baja](src/img/bajafiddesk.png)
### Prototipo de alta fidelidad

En este link podrás encontrar el prototipo de alta fidelidad en Figma.

https://www.figma.com/file/q312afVAlgQQq7u8cnfdjK/Qu%C3%A9-cocino?node-id=0%3A1


### 5. Interfaz



