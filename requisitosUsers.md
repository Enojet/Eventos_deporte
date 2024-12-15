# API /Users

## Registrar nuevo usuario

URL: api/users/register

MÉTODO: POST

BODY:

```json

[

  { "username": "ana",

    "password": 25 ,

    “role”: “admin”
    }

]

```

Respuesta:

- Responde con un json incluyendo Info del usurio y encriptando la contraseña

````json

{

  "msg": "usuario creado",

  "data": {

    "username": "organizador1",

    "password": "$2a$10$G9cPfC6IPeeFFD1.3qMaR.AJ2ZHrlRgInWXA7lpz/TMDo1rB1J3y6",

    "_id": "6756b92ea1cd116d48970e96",

    "createdAt": "2024-12-09T09:32:30.399Z",

    "updatedAt": "2024-12-09T09:32:30.399Z",

    "__v": 0

  }

}```

## Login de usuario



URL: /users/login

MÉTODO: POST

HEADERS: X
BODY:
```json

  { "username": "ana",

 "password": 25 ,

    “role”: “admin”
    }

````

Respuesta:

```json
Login exitoso

{

  "msg": "Login Exitoso",

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0._x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU"

}
```

## Mostar información del perfil

URL: /api/users/profile

MÉTODO: GET

BODY:

```json
{
  "username": "organizador1",
  "password": "123456"
}
```

AUTH: bearer:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0.\_x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU
Respuesta:

Respuesta:

```json
[
  {
    "role": "organizer",
    "_id": "6756b92ea1cd116d48970e96",
    "username": "organizador1",
    "password": "$2a$10$G9cPfC6IPeeFFD1.3qMaR.AJ2ZHrlRgInWXA7lpz/TMDo1rB1J3y6",
    "createdAt": "2024-12-09T09:32:30.399Z",
    "updatedAt": "2024-12-09T09:32:30.399Z",
    "__v": 0
  }
]
```
