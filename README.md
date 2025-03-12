# Pol App Backend

This is the backend for the Pol App, which provides authentication via Facebook and Google using OAuth. The backend is hosted on Render and can be accessed through the following URL:

**URL del Backend:** [https://pol-app.onrender.com](https://pol-app.onrender.com)

## Authentication

The backend offers two authentication methods: Facebook and Google. Below are the available routes and how to use them.

### Facebook Authentication

#### Login with Facebook

- **Route:** `GET /api/auth/facebook`
- **Description:** Redirects the user to Facebook to start the authentication process.
- **Response:** Redirects to Facebook.

#### Facebook Callback

- **Route:** `GET /api/auth/facebook/callback`
- **Description:** Callback that Facebook calls after the user has been authenticated.
- **Response:** Returns a JSON object with the user information and an authentication token.
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

### Google Authentication

#### Login with Google

- **Route:** `GET /api/auth/google`
- **Description:**  Redirects the user to Google to start the authentication process.
- **Response:** Redirects to Google.

#### Google Callback

- **Route:**  `GET /api/auth/google/callback`
- **Description:** Callback that Google calls after the user has been authenticated.
- **Response:** Returns a JSON object with the user information and an authentication token.

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

## Usage Example

### Facebook Authentication

#### Login:
Make a Get request to `https://pol-app.onrender.com/api/auth/facebook.`
The user will be redirected to Facebook for authentication.
#### Callback:
After authentication, Facebook will redirect the user to `https://pol-app.onrender.com/api/auth/facebook/callback.`
The backend will return a JSON object with the user information and token.

### Google Authentication

#### Login:
Make a Get request to `https://pol-app.onrender.com/api/auth/google.`
The user will be redirected to Google for authentication.
#### Callback:
After authentication, Google will redirect the user to `https://pol-app.onrender.com/api/auth/google/callback.`
The backend will return a JSON object with the user information and token.

## Technologies Used

Express.js: Node.js framework for building the API.
Passport.js: Authentication middleware for Node.js.
OAuth: Authorization protocol used for authentication with Facebook and Google.
Render: Hosting platform where the backend is deployed.

## Contribución

If you wish to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.

## License

This project is under a license under construction.
