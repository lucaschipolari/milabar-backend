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
| POST   | `/`   | ✅        | ❌             | Agrega un producto al carrito y crea uno nuevo | `{ "products": "array", "total": "number", "tableNumber": "string", "details": "string", "userId": "string" }`        |
