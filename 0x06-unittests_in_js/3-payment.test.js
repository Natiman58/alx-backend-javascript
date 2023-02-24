// import sinon
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with "SUM", 100, 20', function() {
        // spy on Utils.cal... function
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnceWithExactly('SUM', 100, 20));
        // To restore the orignal implementation of Utils.cal...
        // to prevent any interference with other tests
        spy.restore();
    });
});