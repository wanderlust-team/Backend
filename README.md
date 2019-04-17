# Backend

### API Documentation





#### Registration Routes

URL = https://build-week-wanderlust.herokuapp.com/api/auth

| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| POST   | `/auth/register`                | none                | Creates new user                                   |
| POST   | `/auth/login`                   | users               | Logs in user                                       |




#### Users Routes

URL = https://build-week-wanderlust.herokuapp.com/api/users


| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| GET    | `/`                             | all users           | Returns all  users.                                |



#### Trip Routes

URL = https://build-week-wanderlust.herokuapp.com/api/trips


| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| GET    | `/`                             | all users           | Returns all trips.                                 |
| GET    | `/:id`                          | all users           | Returns specific trip.                             |
| POST   | `/`                             | all users           | Users can add their trips.                         |
| PUT    | `/:id`                          | all users           | Users can update their experiences.                | 
| DELETE | `/:id`                          | all users           | User can delete their own experiences .            |