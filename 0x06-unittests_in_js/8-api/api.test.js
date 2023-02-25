const assert = require('assert');
const fetch = require('node-fetch');
const expect = require('chai').expect;
//const app = require('./api');

async function makeRequest(options) {
    const response = await fetch(options.url, { method: options.method });
    //console.log(response);
    const body = await response.text();
    const { headers, status } = response;
    return { statusCode: status, body, headers };
}


describe('Index page', () => {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    it('should return a welcome message', async() => {
        const { body } = await makeRequest(options);
        expect(body).to.contain("Welcome to the payment system");
        //const response = await fetch('http://localhost:7865/');
        //const text = await response.text();
        //assert.strictEqual(text, 'Welcome to the payment system');
    });

    it('should return the status code 200', async() => {
        const { statusCode } = await makeRequest(options);
        expect(statusCode).to.be.equal(200);

        //const response = await fetch('http://localhost:7865/');
        //assert.strictEqual(response.status, 200);
    });

    it('should check corrent content length', async() => {
        const { headers } = await makeRequest(options);
        expect(headers.get('content-length')).to.equal('29');
    })

    it.skip('should return the status code 404 when hitting invalid endpoint', async() => {
        const response = await fetch('http://localhost:7865/invalid');
        assert.strictEqual(response.status, 404);
    });
});