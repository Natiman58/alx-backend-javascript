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

// define a test suite for the cart/:id page
describe('cart/:id page', () => {
    const options = {
        url: "http://localhost:7865/cart/",
        method: "GET"
    }

    // Test if it returns the correct status code; 200 when id is a numebr
    it('should return a status code 200 when id is a number', (done) => {
        request.get(options.url + 12, (err, response) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        })
    })

    // Test if it displayes the correct output
    it('should display payment method of a cart', (done) => {
            request.get(options.url + 12, (err, response) => {
                expect(response.body).to.be.equal('Payment methods for cart 12');
                done();
            })
        })
        // Test it returns the status code 404 if id isn't a number
    it('should return the 404 status code when id is not a number', (done) => {
        request.get(options.url + 'hello', (err, response) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        })
    })
})

// Test suite for the login end point
describe('/login page', () => {
    const options = {
        url: "http://localhost:7865/login/",
        method: "POST",
        json: {
            userName: "Betty"
        }
    }

    // Test if it returns the status code
    it('should return the status code 200', (done) => {
        request.post(options, (err, response) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        })
    });

    // Test if returns the right content
    it('should return the welcome Betty', (done) => {
        request.post(options, (err, response) => {
            expect(response.body).to.be.equal(`Welcome Betty`);
            done();
        })
    });

    // Test it returns the status code 404 if invalid usernamae
    it('should return the status code 404 if invalid usernamae', (done) => {
        request.post(options.url + 'Ellie', (err, response) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        })
    })

});

// Test suite for the alvailable payments page
describe('/available_payments', () => {
    const options = {
        url: "http://localhost:7865/available_payments/",
        method: "GET"
    }
    it('should return the status code 200', (done) => {
        request.get(options, (err, response) => {
            expect(response.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the right content', (done) => {
        request.get(options, (err, response) => {
            expect(response.body).to.be.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });


});