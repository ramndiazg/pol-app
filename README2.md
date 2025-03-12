# Pol App Backend

Este es el backend de la aplicación Pol App, que proporciona autenticación mediante Facebook y Google utilizando OAuth. El backend está alojado en Render y puede accederse a través de la siguiente URL:

**URL del Backend:** [https://pol-app.onrender.com](https://pol-app.onrender.com)

## Autenticación

El backend ofrece dos métodos de autenticación: Facebook y Google. A continuación, se detallan las rutas disponibles y cómo utilizarlas.

### Autenticación con Facebook

#### Iniciar sesión con Facebook

- **Ruta:** `GET /api/auth/facebook`
- **Descripción:** Redirige al usuario a Facebook para iniciar el proceso de autenticación.
- **Respuesta:** Redirección a Facebook.

#### Callback de Facebook

- **Ruta:** `GET /api/auth/facebook/callback`
- **Descripción:** Callback que Facebook llama después de que el usuario ha sido autenticado.
- **Respuesta:** Devuelve un objeto JSON con la información del usuario y un token de autenticación.
  ```json
  {
    "user": {
      "id": "12345",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Autenticación con Google

#### Iniciar sesión con Google

- **Ruta:** `GET /api/auth/google`
- **Descripción:**  Redirige al usuario a Google para iniciar el proceso de autenticación.
- **Respuesta:** Redirección a Google.

#### Callback de Google

- **Ruta:**  `GET /api/auth/google/callback`
- **Descripción:** Callback que Google llama después de que el usuario ha sido autenticado.
- **Respuesta:** Devuelve un objeto JSON con la información del usuario y un token de autenticación.

```json
{
  "user": {
    "id": "67890",
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Ejemplo de Uso

### Autenticación con Facebook

#### Iniciar sesión:
Realiza una solicitud `GET a https://pol-app.onrender.com/api/auth/facebook.`
El usuario será redirigido a Facebook para autenticarse.
Callback:
Después de la autenticación, Facebook redirigirá al usuario a `https://pol-app.onrender.com/api/auth/facebook/callback.`
El backend devolverá un JSON con la información del usuario y el token.

### Autenticación con Google

#### Iniciar sesión:
Realiza una solicitud `GET a https://pol-app.onrender.com/api/auth/google.`
El usuario será redirigido a Google para autenticarse.
Callback:
Después de la autenticación, Google redirigirá al usuario a `https://pol-app.onrender.com/api/auth/google/callback.`
El backend devolverá un JSON con la información del usuario y el token.

## Tecnologías Utilizadas

Express.js: Framework de Node.js para construir la API.
Passport.js: Middleware de autenticación para Node.js.
OAuth: Protocolo de autorización utilizado para la autenticación con Facebook y Google.
Render: Plataforma de hosting donde está desplegado el backend.
Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.