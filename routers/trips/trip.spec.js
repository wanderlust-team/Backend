//server testing done before server routing handlers

const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig.js');
const trips = require('./trips_model.js');

let token;

beforeAll((done) => {
  request(server)
    .post('/api/auth/register')
    .send({
      username: "Michael",
      password: "password",
      email: "email@email.org",
      guide: true
    })
    .end((err, response) => {
    //   token = response.body.token; // save the token!
      done();
    });
});

beforeAll((done) => {
    request(server)
      .post('/api/auth/login')
      .send({
        username: "Michael",
        password: "password",
      })
      .end((err, response) => {
       token = response.body.token; // save the token!
        done();
      });
  });

describe('trip_routers.js', () => {
    afterEach(async () => {
        await db('Trips').truncate();
    })

    describe('GET /trips', () => {
        it('it should require credentials', async () => {
            const response = await request(server).get('/api/trips');
            expect(response.status).toBe(401)
        })

        it('should respond with 200 OK', async () => {
            const response = await request(server).get('/api/trips').set('Authorization',`${token}`);
            //const response = await request(server).get('/api/trips').auth('Michael', 'password');

            //console.log(token)
            expect(response.status).toBe(200)
            
        })

        it('should return JSON', async () => {
            const response = await request(server).get('/api/trips').set('Authorization', ` ${token}`);

            expect(response.type).toBe('application/json');
              
          });

        it(' should return an empty array', async () => {
            const response = await request(server).get('/api/trips').set('Authorization', `${token}`);

            expect(response.body).toHaveLength(0)
        })

        it('should return a list of trips', async () => {
        trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
        trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
        trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Taipei',description: 'We will explore the cheap and delicious food from the streets of Shi Lim',startDate: 20190522,endDate: 20190529});

            const response = await request(server).get('/api/trips').set('Authorization', `${token}`);
            
            console.log(response.body)
            expect(response.body).toHaveLength(3)
        })

    })

    describe('GET /trips/:id', () => {
        it('should return a specific trip', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Taipei',description: 'We will explore the cheap and delicious food from the streets of Shi Lim',startDate: 20190522,endDate: 20190529});

            const response = await request(server).get(`/api/trips/1`).set('Authorization', `${token}`)
            //console.log(response)
            expect(response.body).toEqual({id: 1, tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529})
        })
    })

    describe('POST /trips', () => {
        it('should return status 201', async () => {
            const trip = {
                tripName: 'Street Food Adventures', 
                userId: 1 , 
                location: 'Hong Kong',
                description: 'We will explore ',
                startDate: 20190522,
                endDate: 20190529
            };
      
            let response = await request(server)
              .post('/api/trips')
              .set('Authorization', `${token}`)
              .send(trip);

            //console.log(response)
            expect(response.status).toBe(201);
          });
        
        it('returns the new trip', async () => {
            const trip = {
                tripName: 'Street Food Adventures', 
                userId: 1 , 
                location: 'Hong Kong',
                description: 'We will explore the cheap and delicious food from the streets of Mong Kok',
                startDate: 20190522,
                endDate: 20190529
            };

            let response = await request(server)
                .post('/api/trips')
                .send(trip)
                .set('Authorization', `${token}`);

            expect(response.body).toBe(1)
        })

    })

    describe('DELETE /trips/:id', () => {
        it('should respond with status 200', async () => {
           await db('Trips').insert({tripName: 'Street Food Adventures', userId: 1 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});

            const response = await request(server).delete('/api/trips/1').set('Authorization', `${token}`)

            expect(response.status).toBe(200)    
        })

        it('should get message of trip deleted', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
            
            const onlyTrip = await request(server).delete('/api/trips/1').set('Authorization', `${token}`);

        
            expect(onlyTrip.body).toEqual({message: 'Trip has been deleted'})
        })
    })
 })