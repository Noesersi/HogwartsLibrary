
# Hogwarts Library

Este proyecto es una prueba técnica para unas practicas en una empresa.

Se trata de aplicación completa utilizando Node.js, Express, Firebase y React Native.

He creado la app con expo.io y la he cargado en un movil virutal con android studio.

Se trata de una libreria virtual en la que puedes añadir, editar y consultar los detalles de cada libro, consumiendo los datos de la api.




## Instalación e inicio

-Primer paso: instalar dependencias con 'npm install'

-Segundo paso: crear un archivo con el nombre "env.js" en la raiz del proyecto. 
*Para trabajar en local: Añadir este codigo al archivo: "export const BASE_URL = 'http://10.0.2.2:1234/api'". La ip ("10.0.2.2") puede variar segun el dispositivo en el que se lance, en este caso la ip es el equivalente de localHost para cualquier device de Android Studio. Para consultar la ip de otros dispositivos acceder a la documentacion de expo https://docs.expo.dev/.

*Actualmente la API esta desplegada en internet para todo el mundo, por lo tanto se puede trabajar añadiendo este codigo al archivo env.js "export const BASE_URL = 'https://hogwarts-library.onrender.com/api'".


-Tercer paso: iniciar proyecto 'npm run start'

Cargar el proyecto de expo en Android Studio o equivalente.

