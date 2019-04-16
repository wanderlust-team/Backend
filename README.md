# Backend

### API Documentation





#### Registration Routes

URL = http://localhost:5000/api/auth

| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| POST   | `/auth/register`                | none                | Creates new user                                   |
| POST   | `/auth/login`                   | users               | Logs in user                                       |




#### Users Routes

URL = http://localhost:5000/api/users


| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| GET    | `/`                             | all users           | Returns all  users.                                |



#### Trip Routes

URL = http://localhost:5000/api/trips


| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| GET    | `/`                             | all users           | Returns all trips.                                 |
| GET    | `/:id`                          | all users           | Returns specific trip.                             |
| POST   | `/`                             | all users           | Users can add their trips.                         |
| PUT    | `/:id`                          | all users           | Users can update their experiences.                | 
| DELETE | `/:id`                          | all users           | User can delete their own experiences .            |