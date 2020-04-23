var request = require('supertest');

var app = require('../server.js')

describe('GET /', function () {
    it('displays "Hello World!"', function (done) {     // The line below is the core test of our app.

        request(app).get('/').expect('Hello World!', done);

    });
});  