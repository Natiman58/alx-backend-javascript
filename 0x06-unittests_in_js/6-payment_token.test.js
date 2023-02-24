// test suite without using done
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token')


describe("getPaymentTokenFromApI", function() {
    it("sould return a resolved promise obj with a data when success is true", async function() {
        const response = await getPaymentTokenFromAPI(true);
        assert.deepEqual(response, { data: 'Successful response from the API' });
    });
    it("sould return a resolved promise obj with no data when success is false", async function() {
        const response = await getPaymentTokenFromAPI(false);
        assert.strictEqual(response, undefined);
    });
});