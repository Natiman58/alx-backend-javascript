// testing using sinon along with mocha

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with "SUM", 100, 20', function() {
        // create a stub on Utils.cal... function to check how it was called
        // and a spy on the console logging
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy = sinon.spy(console, 'log');

        // call calNumm...function through sendPay.. function
        sendPaymentRequestToApi(100, 20);

        // to check if it was called just once with the exact arguments
        assert(stub.calledOnceWithExactly("SUM", 100, 20));
        assert(spy.calledOnceWithExactly("The total is: 10"));

        // To restore the orignal implementation of Utils.cal... function
        // to prevent any interference with other tests
        stub.restore();
        spy.restore();
    });
});