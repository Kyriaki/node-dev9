const expect = require('expect');
const request = require('supertest');

var app = require('./server').app;

describe('#Test du server', () => {

  it('GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });

  // route inexistante
  it('GET /toto', (done) => {
    request(app)
      .get('/toto')
      .expect(404)
      .end(done);
  });

  it('GET /users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({id:1, name:'Leonardo'});
      })
      .end(done);
  });

});
