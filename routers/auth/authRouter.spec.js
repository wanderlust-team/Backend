const request = require('supertest');
const app = require('../../api/server.js'); // the express server

/*
  declare the token variable in a scope accessible
  by the entire test suite
*/
let token;

beforeAll((done) => {
  request(app)
    .post('/login')
    .send({
      username: "Michael",
      password: "password",
      email: "email@email.org",
      guide: true
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

describe('GET /', () => {
  test('It should require authorization', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test('It responds with JSON', () => {
    return request(app)
      .get('/')
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
  })
})
