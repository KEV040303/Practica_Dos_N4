
# JWT Authentication

El siguiente proyecto contempla la implementacion de jsonwebtokens JWT para la autenticación de usuarios. Se desarrollo con la Arquitectura MVC.

Tiene las siguientes rutas:

### Bienvenida a la API

GET http://localhost:3000/auth

Para verificar que el servidor esta funcionando correctamente

Con estado 200

```
{
  "mensaje": "Bienvenido a la API"
}
```

### Ingresar a la APi y generar Token

POST http://localhost:3000/auth/login

Para fines demostrativos se le da el siguiente JSON para el request en el body 
```
{
  "username": "usuario",
  "password": "password123"
}
```
Luego nos generará un token con una duración de 5 minutos, después de este tiempo expirará.
Por ejemplo: 

Con estado 200
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzdWFyaW8iLCJpYXQiOjE3MTU3Mjc4MDgsImV4cCI6MTcxNTcyNzg2OH0.zn_8XjwQ7IEO2InK7y931-foo6_rnlrN7GKL0HR2bXQ"
}
```
### Verificar si el token es válido

GET http://localhost:3000/auth/verify

Si el token es valido, se leera: 

Con estado 200
```
{
  "message": "Token válido"
}
```

Si no es válido o ya expiró, mostrará:

Con estado 401
```
{
  "error": "Token inválido o ha expirado"
}
``` 
