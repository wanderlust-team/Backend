const request = require('supertest');
const server = require('../../api/server.js');
const db = require('../../data/dbConfig.js');
const trips = require('./trips_model.js');

describe('server.js', () => {
    afterEach(async () => {
        await db('games').truncate();
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

    })

    describe('POST /trips', () => {

    })
})