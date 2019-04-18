//server testing done before server routing handlers

const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig.js');
const trips = require('./trips_model.js');

describe('server.js', () => {
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
                // truncating makes it 0 
            
        })
    })

    describe('POST /trips', () => {
        it('should return status 201', async () => {
            //const trip = ;
      
            let response = await request(server)
              .post('/trips')
              .send();
            expect(response.status).toBe(201);
          });


    })
})