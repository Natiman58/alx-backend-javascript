const request = require('request');
const fetch = require('node-fetch');
const expect = require('chai').expect;
//const app = require('./api');

describe('Index page', () => {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    }
    it('should return the status code 200', (done) => {
        request.get(options, (error, response) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return Welcome to the payment system', (done) => {
        request.get(options, (error, response) => {
            expect(response.body).to.equal('Welcome to the payment system');
            done();
        })
    })

    it('should return the correct content lenght', (done) => {
        request.get(options, (error, response) => {
            expect(response.headers['content-length']).to.equal('29')
            done();
        })
    })

});;