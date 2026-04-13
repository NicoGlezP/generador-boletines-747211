# generador-boletines-747211

## Práctica 04 - Comunicación entre contenedores
#### **Actividad 1:** Creación de una imagen de Docker que contenga un API Rest para el envío de boletines.
1. Crea una aplicación que tenga el endpoint POST /boletines el cual deberá de aceptar dentro de sus parámetros:
   1. Un archivo que deberá de ser enviado dentro del boletín
   2. El contenido del mensaje que deberá de ser enviado dentro del boletín.
   3. El correo electrónico al cual deberá de ser enviado el boletín.
2. Cuando se reciba el boletín, este deberá de realizar lo siguiente:
   1. Subir una imagen a un bucket de S3. El bucket deberá de llamarse practica-4-{expediente}
   2. Enviar un mensaje en una cola de SQS que contenga el contenido del boletín, el correo electrónico y el link de la imagen guardada en S3. La cola deberá de llamarse cola-boletines (el alumno es libre de utilizar colas normales o FIFO)
3. Deberás de generar una imagen de Docker y publicarla en ECR. El nombre deberá de ser emisor-boletines-expediente:version 

# Práctica 05 - Generador de boletines

19/04/2026

#### **Objetivos de la práctica:**
1. Implementar un flujo de Continuous Integration / Continuous Delivery (CI/CD) para desplegar una aplicación.
2. Reforzar los conceptos de una aplicación de 12 factores.
3. Manejar los conceptos de contenedores y repositorios de contenedores dentro de nubes públicas. 

Realizarás:
Seís actividades en esta práctica.

#### **Actividad 1 (10 puntos):** Creación de una cuenta y configuración de un archivo de github actions
1. Crear una cuenta de Github y crear un repositorio para cada uno de los módulos realizados dentro de la práctica 4:
   1. receptor-boletines-expediente
   2. procesador-boletines-expediente
   3. generador-boletines-expediente
2. Cada uno de los proyectos deberá de tener un archivo para github actions. Pueden utilizar el ejemplo creado en la clase o bien el ejemplo subido aquí (el. cual ya debería de realizar la conexión a las instancias de EC2)

#### **Actividad 2 (20 puntos):** Modificación del github actions para la elaboración de la etapa build
1. Tendrás que modificar el script para poder crear la versión ejecutable de tu proyecto.
2. La etapa de build consiste en generar, dentro de tu proyecto, los archivos necesarios para que tu proyecto pueda ejecutarse.
3. Ojo, para el manejo de los secretos y la conexión del código deberemos de utilizar variables de entorno, secretos o demás información que NO VIVA DENTRO DEL CÓDIGO.

#### **Actividad 3 (30 puntos):** Modificación de github Actions para la elaboración de la etapa de Docker o de distribución.
1. Esta etapa debe de suceder si y sólo si el paso anterior fue exitoso.
2. Para esta etapa necesitarás crear la imagen de Docker que debe de ser generada por medio de tu Dockerfile.
3. En teoría, debes de tener tus repositorios de ECR creados, por lo que necesitarás configurar lo necesario para conectarte desde Github actions.
4. Cada imagen de docker tiene que tener una etiqueta diferente, todo esto para tener un historial de las versiones diferentes.

#### **Actividad 4 (20 puntos):** Modificación del github actions para la elaboración de la etapa execution (o deploy)
1. Esta etapa debe de suceder si y sólo si el paso anterior fue exitoso.
2. Tendrás que modificar el archivo de github actions para hacer la conexión a una instancia de EC2 (la cual debes de crear previo a todo) y realizar el despliegue de la misma, utilizando para ello la imagen creada.
3. Tienes que asegurarte que tu aplicación está funcionando de manera correcta. 

#### **Actividad 5 (10 puntos):** Contestar a las siguientes preguntas:
1. ¿Cuál es el paso que más se te ha complicado en esta práctica? ¿Por qué crees que se te complico?
2. ¿Cuales son los diferentes factores que se están cubriendo con tu aplicación dentro del paradigma de las aplicaciones de 12 factores?
3. ¿Cuál consideras que es el paso más complicado a implementar dentro de la práctica?

#### **Actividad 6 (10 puntos):** Conclusiones del alumno
Redactar de manera detallada lo que concluiste dentro de la práctica, tus aprendizajes y aspectos que consideres relevantes que hayan transcurrido dentro de la práctica. 

#### **Entregarás:**
Un archivo en formato ZIP con nombre practica-5-{{numeroExpediente}}.zip con el siguiente contenido:

1. El proyecto que realizaste
2. Un reporte de práctica en donde incluyas por lo menos los pasos, tus preguntas y tus conclusiones
