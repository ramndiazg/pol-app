Pol-App Backend
Este es el backend de la aplicación Pol-App, una plataforma política que permite a los usuarios registrarse, referir a otros usuarios, ver noticias y darles like. El backend está construido con Node.js, Express, MongoDB y desplegado en Render.

Tabla de Contenidos

Instalación
Configuración
Uso
Rutas de la API
Documentación de la API
Despliegue
Contribución
Licencia
Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente.

Clona el repositorio:
bash
Copy
git clone https://github.com/tu-usuario/pol-app.git
cd pol-app
Instala las dependencias:
bash
Copy
npm install
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
env
Copy
PORT=5001
DB_STRING=mongodb+srv://usuario:contraseña@cluster0.mongodb.net/pol-app?retryWrites=true&w=majority
JWT_SECRET=clave_super_secreta
Inicia el servidor:
bash
Copy
npm start
Ejecuta las pruebas:
bash
Copy
npm test
Configuración

Variables de Entorno

Variable	Descripción	Valor por Defecto
PORT	Puerto en el que corre el servidor	5001
DB_STRING	Cadena de conexión a MongoDB	-
JWT_SECRET	Clave secreta para firmar tokens JWT	-
Uso

Ejecutar en Local

Inicia el servidor:
bash
Copy
npm start
Accede a la API en:
Copy
http://localhost:5001
Prueba las rutas usando Postman o cualquier cliente HTTP.
Despliegue en Render

El backend está desplegado en Render. Puedes acceder a la API en:

Copy
https://pol-app.onrender.com
Rutas de la API

Usuarios

Método	Ruta	Descripción
POST	/api/users/register	Registrar un nuevo usuario
POST	/api/users/login	Iniciar sesión como usuario
GET	/api/users/referrals	Obtener usuarios referidos
Noticias

Método	Ruta	Descripción
POST	/api/news	Crear una nueva noticia (Admin)
GET	/api/news	Obtener todas las noticias
POST	/api/news/:id/like	Dar like a una noticia (Usuario)
Administradores

Método	Ruta	Descripción
POST	/api/admin/register	Registrar un nuevo administrador
POST	/api/admin/login	Iniciar sesión como administrador
Documentación de la API

La documentación de la API está disponible usando Swagger. Puedes acceder a ella en:

Local:
Copy
http://localhost:5001/api-docs
Producción:
Copy
https://pol-app.onrender.com/api-docs
En Swagger UI, puedes explorar todas las rutas, probarlas y ver ejemplos de solicitudes y respuestas.

Despliegue

El backend está desplegado en Render. Para desplegar tu propia instancia:

Crea una cuenta en Render.
Conecta tu repositorio de GitHub.
Configura las variables de entorno en el panel de Render.
Despliega el servicio.
Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama:
bash
Copy
git checkout -b feature/nueva-funcionalidad
Realiza tus cambios y haz commit:
bash
Copy
git commit -m "Agrega nueva funcionalidad"
Envía un pull request.
Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

Ejemplos de Uso

Registrar un Usuario

URL: POST /api/users/register

Body:

json
Copy
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "phone": "1234567890",
  "idNumber": "123456789"
}
Respuesta:

json
Copy
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Obtener Noticias

URL: GET /api/news

Respuesta:

json
Copy
[
  {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d3",
    "title": "Nueva Noticia",
    "content": "Este es el contenido de la noticia.",
    "image": "https://example.com/image.jpg",
    "publicationDate": "2023-09-01T12:00:00.000Z",
    "likes": [],
    "admin": {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d2",
      "name": "Admin User"
    }
  }
]

Mongo Atlas DB
ramndiaz
9D1xPZTXskjT0U0k
mongodb+srv://ramndiaz:9D1xPZTXskjT0U0k@cluster0.bmxgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
npm start