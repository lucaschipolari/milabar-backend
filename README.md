# milabar-backend
Ultimo Proyecto de Rolling


## API Documentation: `/api/v1/contact`

| Method | Endpoint            | Protegido | Debe ser Admin | Descripción                             | Body                                                                                                 |
|--------|---------------------|-----------|----------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| POST   | `/`    | ❌        | ❌           | Guarda un nuevo mensaje de contacto     | `{ "issue": "string", "name": "string", "lastname": "string", "email": "string", "message": "string" }` | 
| GET    | `/`    | ❌        | ❌             | Recupera todos los mensajes activos     | N/A                                                                                                  |
| PUT    | `/:id`| ✅        | ✅            | Actualiza un mensaje de contacto        | Cualquier campo del mensaje que se quiera actualizar                                                  |
| DELETE | `/:id`| ✅       | ✅            | Marca un mensaje como inactivo          | N/A                                                                                                  |

## API Documentation: `/api/v1/shoppingCart`

| Method | Endpoint                | Protegido | Debe ser Admin | Descripción                                    | Body                                                                                                                   |
|--------|-------------------------|-----------|----------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|

## API Documentation: `/api/v1/productos`

| Method | Endpoint            | Protegido | Debe ser Admin | Descripción                             | Body                                                                                                 |
|--------|---------------------|-----------|----------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| POST   | `/agregar-producto`    | ✅        | ✅           | Guarda un nuevo producto     | `{ "nombre": "string", "descripcion": "string", "categoria": "string", "preciounitario": "number", "imagen": "string", "habilitado": "boolean", "agregado": "boolean" }` | 
| GET    | `/`    | ❌        | ❌             | Recupera todos los productos activos     | N/A 
| GET    | `/detalle/:id`    |✅         | ✅             | Recupera un producto activo específico     | N/A |
| PUT    | `/detalle/:id`| ✅        | ✅            | Actualiza un producto        | Cualquier campo del producto que se quiera actualizar                                                  |
| DELETE | `/:id`| ✅       | ✅            | Marca un producto como inactivo          | N/A   

## API Documentation: `/api/v1/users`

| Method | Endpoint            | Protegido | Debe ser Admin | Descripción                             | Body                                                                                                 |
|--------|---------------------|-----------|----------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| POST   | `/register`    | ✅        | ✅           | Guarda un nuevo usuario    | `{ "username": "string", "email": "string", "password": "string" }` | 
| POST    | `/login`    | ❌        | ❌             | Envia un usuario que desea logearse     | `{ "email": "string", "password": "string" }` |
| GET    | `/:id`    |✅         | ❌             | Recupera un usuario activo específico     | N/A |
| PUT    | `/:id`| ✅        | ❌            | Actualiza un usuario        | Cualquier campo del usuario que se quiera actualizar excepto el rol |

