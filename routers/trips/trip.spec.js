//server testing done before server routing handlers

const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig.js');
const trips = require('./trips_model.js');

describe('trip_routers.js', () => {
    afterEach(async () => {
        await db('Trips').truncate();
    })

    describe('GET /trips', () => {
        it('should respond with 200 OK', async () => {
            const response = await request(server).get('/trips');
            
            expect(response.status).toBe(200)
            
        })

        it('should return JSON', async () => {
            const response = await request(server).get('/trips');

            expect(response.type).toBe('application/json');
              
          });

        it(' should return an empty array', async () => {
            const response = await request(server).get('/trips');

            expect(response.body).toHaveLength(0)
        })

        it('should retrun a list of trips', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Taipei',description: 'We will explore the cheap and delicious food from the streets of Shi Lim',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Kuala Lumpar',description: 'We will explore the cheap and delicious food from the streets',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'BangKok',description: 'We will explore the cheap and delicious food from the streets',startDate: 20190522,endDate: 20190529});


            const response = await request(server).get('/trips');
            
            expect(response.body).toHaveLength(5)
        })

    })

    describe('GET /trips/:id', () => {
        it('should return a specific trip', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Taipei',description: 'We will explore the cheap and delicious food from the streets of Shi Lim',startDate: 20190522,endDate: 20190529});

            const response = await request(server).get(`/trips/2`)

            expect(response.body).toEqual({id: 2, tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529})
        })
    })

    describe('POST /trips', () => {
        it('should return status 201', async () => {
            const trip = {
                tripName: 'Street Food Adventures', 
                userId: 2 , 
                location: 'Hong Kong',
                description: 'We will explore the cheap and delicious food from the streets of Mong Kok',
                startDate: 20190522,
                endDate: 20190529
            };
      
            let response = await request(server)
              .post('/trips')
              .send(trip);
            expect(response.status).toBe(201);
          });
        
        it('returns the new trip', async () => {
            const trip = {
                tripName: 'Street Food Adventures', 
                userId: 2 , 
                location: 'Hong Kong',
                description: 'We will explore the cheap and delicious food from the streets of Mong Kok',
                startDate: 20190522,
                endDate: 20190529
            };

            let response = await request(server)
                .post('/trips')
                .send(trip);

            expect(response.body).toEqual({
                id: 1,
                tripName: 'Street Food Adventures', 
                userId: 2 , 
                location: 'Hong Kong',
                description: 'We will explore the cheap and delicious food from the streets of Mong Kok',
                startDate: 20190522,
                endDate: 20190529
            })
        })

    })

    describe('DELETE /trips/:id', () => {
        it('should respond with status 200', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});

            const response = await request(server).delete('/trips/1')

            expect(response.status).toBe(200)    
        })

        it('should delete the specify trip', async () => {
            trips.addTrips({tripName: 'Street Food Adventures', userId: 2 , location: 'Hong Kong',description: 'We will explore the cheap and delicious food from the streets of Mong Kok',startDate: 20190522,endDate: 20190529});
            trips.addTrips({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529});
            
            const response = await request(server).delete('/trips/1');
            
            const onlyTrip = await request(server).get('/trips');

            expect(onlyTrip.body).toHaveLength(1);
            expect(onlyTrip.body).toEqual({tripName: 'Street Food Adventures', userId: 1 , location: 'Tokyo', description: 'We will explore the cheap and delicious food from the streets of Shinjuku',startDate: 20190522,endDate: 20190529})
        })
    })
})