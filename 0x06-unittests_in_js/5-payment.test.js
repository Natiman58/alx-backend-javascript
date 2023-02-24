// testing using sinon along with mocha hooks

const sinon = require('sinon');
const assert = require('assert');
//const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function() {
    let spy;

    // before each test case, create a new spy object for the console.log method
    beforeEach(function() {
        spy = sinon.spy(console, 'log');
    });

    // after each test case, restore the original behavior of the console.log method
    afterEach(function() {
        spy.restore();
    });

    it('should call sendPaymentRequestToAPI with 100, 20', function() {
        sendPaymentRequestToApi(100, 20);
        assert(spy.calledOnceWithExactly("The total is: 120"))
    })

    it('should call sendPaymentRequestToAPI with 10, 10', function() {
        sendPaymentRequestToApi(10, 10);
        assert(spy.calledOnceWithExactly("The total is: 20"));
    })

});