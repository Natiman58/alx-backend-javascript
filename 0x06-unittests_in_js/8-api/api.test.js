const assert = require('assert');
const fetch = require('node-fetch');
const app = require('./api');

describe('Index page', () => {
    let server;

    beforeEach(async() => {
        server = app.listen(7866);
    });

    afterEach(async() => {
        server.close(() => {
            console.log('Server closed');
        });
    });

    it('should return a welcome message', async() => {
        const response = await fetch('http://localhost:7866/');
        const text = await response.text();
        assert.strictEqual(text, 'Welcome to the payment system');
    });

    it('should return the status code 200', async() => {
        const response = await fetch('http://localhost:7866/');
        assert.strictEqual(response.status, 200);
    });

    it('should return the status code 404 when hitting invalid endpoint', async() => {
        const response = await fetch('http://localhost:7866/invalid');
        assert.strictEqual(response.status, 404);
    });
});