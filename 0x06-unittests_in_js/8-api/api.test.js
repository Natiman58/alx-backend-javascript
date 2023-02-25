const request = require('request'); // import requests for HTTP request
const expect = require('chai').expect; // import expect from chai assertion lib

// define the test suite for the index page
describe('Index page', () => {
    const options = { // set options for the HTTP request to the index page
            url: "http://localhost:7865/",
            method: "GET"
        }
        // Test the it returns the correct status code
    it('should return the status code 200', (done) => {
        request.get(options, (error, response) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test it returns the correct message
    it('should return Welcome to the payment system', (done) => {
        request.get(options, (error, response) => {
            expect(response.body).to.equal('Welcome to the payment system');
            done();
        })
    })

    // Test it returns the correct content length
    it('should return the correct content lenght', (done) => {
        request.get(options, (error, response) => {
            expect(response.headers['content-length']).to.equal('29')
            done();
        })
    })

});;