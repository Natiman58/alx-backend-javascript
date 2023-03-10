// testing using sinon along with mocha

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with "SUM", 100, 20', function() {
        // create spy on Utils.cal... function to check how it was called
        const spy = sinon.spy(Utils, 'calculateNumber');
        // call calNumm...function through sendPay.. function
        sendPaymentRequestToApi(100, 20);
        // to check it was called just once with the exact arguments
        assert(spy.calledOnceWithExactly('SUM', 100, 20));
        // To restore the orignal implementation of Utils.cal... function
        // to prevent any interference with other tests
        spy.restore();
    });
});