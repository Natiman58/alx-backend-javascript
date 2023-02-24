// test suite using done
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token')


describe("getPaymentTokenFromApI", function() {
    it("sould return a resolved promise obj with a data when success is true", function() {
        return getPaymentTokenFromAPI(true).then(function(response) {
            assert.deepEqual(response, { data: 'Successful response from the API' });
        });
    });
    it("sould return a resolved promise obj with no data when success is false", function() {
        return getPaymentTokenFromAPI(false).then(function(response) {
            assert.strictEqual(response, undefined);
        });
    });
});