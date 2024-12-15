# API /Eventos


## RUTAS PROTEGIDAS

## Devuelve la lista de todos los eventos
URL: api/events/getAll
http://localhost:2500/events//getAll
MÉTODO: GET

AUTH:
Bearer:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0._x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU

El usuario tiene que estar autenticado y tener un token
Respuesta: Array con todos los eventos
```json
[
  {
    "_id": "675324c73810767fdbe09707",
    "name": "Descenso del Sella",
    "description": "Descenso en piragua",
    "date": "2025-07-05T00:00:00.000Z",
    "location": "asturias",
    "sportType": "piragua",
    "createdAt": "2024-12-06T16:22:31.351Z",
    "updatedAt": "2024-12-06T16:22:31.351Z",
    "__v": 0
  },
  {
    "_id": "67560329a5e7e464542410b2",
    "name": "Descenso en huesa",
    "description": "DEscenso en rapidos de huesca",
    "date": "2025-06-29T00:00:00.000Z",
    "location": "huesca",
    "sportType": "piragua",
    "user": "organizador1",
    "createdAt": "2024-12-08T20:35:53.756Z",
    "updatedAt": "2024-12-08T20:35:53.756Z",
    "__v": 0
  },
  {
    "_id": "675603cda5e7e464542410b6",
    "name": "San Silvestre",
    "description": "Carrera de atletismo en noche vieja",
    "date": "2024-12-31T00:00:00.000Z",
    "location": "Bilbao",
    "sportType": "atletismo",
    "user": "organizador2",
    "createdAt": "2024-12-08T20:38:37.757Z",
    "updatedAt": "2024-12-08T20:38:37.757Z",
    "__v": 0
  }
]
```
Si no esta authenticado como organizador: 
Respuesta: 
```json
{
  "msg": "Se necesita el Token"
}
```

## Registrar nuevo evento
 
URL: api/events/add
http://localhost:2500/events/add
MÉTODO: POST

BODY:
```json

{
"name":" La Bilbao-Bilbao",
"description":"carrera de ciclismo recorreindo todos los pueblos de Bizkaia",
"date":"2026-01-02",
"location":"Bilbao, Bizkaia",
"sportType":"ciclismo",
"user":"organizador 1"
}
```
Auth: Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0._x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU

Respuesta:

- Responde con un json incluyendo si el usurio esta autenticado con un token


```json
{
  "msg": "Evento creado correctamente",
  "createdEvent": {
  "name": " La Bilbao-Bilbao",
  "description": "carrera de ciclismo recorreindo todos los pueblos de Bizkaia",
  "date": "2026-01-02T00:00:00.000Z",
  "location": "Bilbao, Bizkaia",
  "sportType": "ciclismo",
  "user": "organizador 1",
  "_id": "675729e9dda45547bc32b495",
  "createdAt": "2024-12-09T17:33:29.796Z",
  "updatedAt": "2024-12-09T17:33:29.796Z",
  "__v": 0
}}
```

Si no esta authenticado como organizador: 
Respuesta: 
```json
{
  "msg": "Se necesita el Token"
}
```

## Devuelve un evento segun su Id

 

URL: api/events/get/:id
http://localhost:2500/events/get/67560329a5e7e464542410b2
MÉTODO: GET

HEADERS: X
AUTHOR:
Bearer:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0._x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU


Respuesta:

Teniendo el token devuelve el json del evento, sino da erros ya que tiene que estar autenticado
```json
{
  "_id": "67560329a5e7e464542410b2",
  "name": "Descenso en huesa",
  "description": "DEscenso en rapidos de huesca",
  "date": "2025-06-29T00:00:00.000Z",
  "location": "huesca",
  "sportType": "piragua",
  "user": "organizador1",
  "createdAt": "2024-12-08T20:35:53.756Z",
  "updatedAt": "2024-12-08T20:35:53.756Z",
  "__v": 0
}
```
Si no esta authenticado como organizador: 
Respuesta: 
```json
{
  "msg": "Se necesita el Token"
}
```
 

## Actualizar datos del evento segun Id

 
URL: /api/events/update/:id
http://localhost:2500/events/update/6759cb7a047325d9568eeaca
MÉTODO: PUT

BODY: En el Json se corrige 
```json
{
  "name": "Descenso en huesca",
  "description": "Descenso en rapidos de huesca",
  "date": "2025-06-29T00:00:00.000Z",
  "location": "huesca",
  "sportType": "piragua",
  "user": "organizador1"
  
}

```
AUTH: bearer:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NmI5MmVhMWNkMTE2ZDQ4OTcwZTk2IiwidXNlcl91c2VybmFtZSI6Im9yZ2FuaXphZG9yMSIsImlhdCI6MTczMzczNjk5OH0._x_N4dU8MnFxv93FpZH4G_i3ujzs7NR2VOgPhzrrTIU
Respuesta:
```json
{
  "msg": "Evento actualizado correctamente",
  "newEvent": {
  "_id": "6759cb7a047325d9568eeaca",
  "name": "Descenso en huesca",
  "description": "Descenso en rapidos de huesca",
  "date": "2025-06-29T00:00:00.000Z",
  "location": "huesca",
  "sportType": "piragua",
  "user": "organizador1",
  "createdAt": "2024-12-11T17:27:22.299Z",
  "updatedAt": "2024-12-11T17:31:36.150Z",
  "__v": 0
}}
 
```

Si no esta authenticado como organizador: 
Respuesta: 
```json
{
  "msg": "Se necesita el Token"
}
```
## Eliminar el evento segun Id

URL: /api/events/delete/:id
http://localhost:2500/events/delete/6759cb7a047325d9568eeaca
MÉTODO: DELETE

AUTH: bearer:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1OWQxYmEwNDczMjVkOTU2OGVlYWQwIiwidXNlcl91c2VybmFtZSI6IkFuZHJlcyIsInVzZXJfcm9sZSI6ImFkbWluIiwiaWF0IjoxNzMzOTM5NjUyfQ.q98NNGedSHiDAMxaGReX9sL8Mun1wnmhXbvDtNYkUPY" (tiene que estar registrado como administrador)

Respuesta:
Si no eres administrador, solo puede borrar el rol de administrador

```json
{
  "msg": "el usuario no es administrador"
}
```
si es administrador:
```json
{
  "msg": "Evento borrado correctamente",
  "deleteEvent": {
  "_id": "6759cb7a047325d9568eeaca",
  "name": "Descenso en huesca",
  "description": "Descenso en rapidos de huesca",
  "date": "2025-06-29T00:00:00.000Z",
  "location": "huesca",
  "sportType": "piragua",
  "user": "organizador1",
  "createdAt": "2024-12-11T17:27:22.299Z",
  "updatedAt": "2024-12-11T17:31:36.150Z",
  "__v": 0
}}
```

## CONSULTA AVANZADAS NO PROTEGIDAS

## Eventos proximos ordenados por fecha

URL: /api/events/getEvents/upcoming?from=date
http://localhost:2500/events/getEvents/upcoming?from=2025-06-06
MÉTODO: GET

QUERY PARAMETERS: from:2024
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1OWQxYmEwNDczMjVkOTU2OGVlYWQwIiwidXNlcl91c2VybmFtZSI6IkFuZHJlcyIsInVzZXJfcm9sZSI6ImFkbWluIiwiaWF0IjoxNzMzOTM5NjUyfQ.q98NNGedSHiDAMxaGReX9sL8Mun1wnmhXbvDtNYkUPY" (tiene que estar registrado como administrador)

Respuesta:
Si no eres administrador, solo puede borrar el rol de administrador

Query paramenters: from=2024-12-02
Respuestas:
si fecha mal:
```json
{
  "msg": "Formato de fecha inválido"
}
```

si fecha ok y hay eventos:
```json
[
  {
    "_id": "675603cda5e7e464542410b6",
    "name": "San Silvestre",
    "description": "Carrera de atletismo en noche vieja",
    "date": "2024-12-31T00:00:00.000Z",
    "location": "Bilbao",
    "sportType": "atletismo",
    "user": "organizador2",
    "createdAt": "2024-12-08T20:38:37.757Z",
    "updatedAt": "2024-12-08T20:38:37.757Z",
    "__v": 0
  },
  {
    "_id": "6759d4cb4a0412f6a1b32ab9",
    "name": "Descenso en huesa",
    "description": "DEscenso en rapidos de huesca",
    "date": "2025-06-29T00:00:00.000Z",
    "location": "huesca",
    "sportType": "piragua",
    "user": "organizador1",
    "createdAt": "2024-12-11T18:07:07.753Z",
    "updatedAt": "2024-12-11T18:07:07.753Z",
    "__v": 0
  },
  {
    "_id": "675324c73810767fdbe09707",
    "name": "Descenso del Sella",
    "description": "Descenso en piragua",
    "date": "2025-07-05T00:00:00.000Z",
    "location": "asturias",
    "sportType": "piragua",
    "createdAt": "2024-12-06T16:22:31.351Z",
    "updatedAt": "2024-12-06T16:22:31.351Z",
    "__v": 0
  }
]
```
si no hay eventos:
```json
{
  "msg": "No se encontraron eventos futuros"
}
```

## Devuelve eventos entre dos fechas

URL: /api/events/getEvents/date??from=date&to=date
http://localhost:2500/events/getEvents/date?from=2024-06-06&to=2025-01-01
MÉTODO: GET

QUERY PARAMETERS: 
    from:2024-06-06 
    to:2025-01-01

Respuesta:
```json
[
  {
    "_id": "675603cda5e7e464542410b6",
    "name": "San Silvestre",
    "description": "Carrera de atletismo en noche vieja",
    "date": "2024-12-31T00:00:00.000Z",
    "location": "Bilbao",
    "sportType": "atletismo",
    "user": "organizador2",
    "createdAt": "2024-12-08T20:38:37.757Z",
    "updatedAt": "2024-12-08T20:38:37.757Z",
    "__v": 0
  }
]
```


si no hay eventos con esa fecha:
```json
{
  "msg": "No hay evetos con esos valores"
}
```

si  no es formato adecuado de fecha:
```json
{
  "msg": "Formato erroneo"
}
```
## Devuelve eventos segun tipo de deporte

URL: /api/events/getByyType?sport=sportType
http://localhost:2500/events/getByType?sport=atletismo
MÉTODO: GET

QUERY PARAMETERS: 
    sport=atletismo
Respuesta:
```json
[
  {
    "_id": "675603cda5e7e464542410b6",
    "name": "San Silvestre",
    "description": "Carrera de atletismo en noche vieja",
    "date": "2024-12-31T00:00:00.000Z",
    "location": "Bilbao",
    "sportType": "atletismo",
    "user": "organizador2",
    "createdAt": "2024-12-08T20:38:37.757Z",
    "updatedAt": "2024-12-08T20:38:37.757Z",
    "__v": 0
  }
]
```


si no hay eventos con esa fecha:
```json
{
  "msg": "No hay evento de ese tipo"
}
```

`
