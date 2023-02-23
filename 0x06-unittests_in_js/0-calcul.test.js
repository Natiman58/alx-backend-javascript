const assert = require('assert');
const calculate = require('./0-calcul.js');

describe('calculate', function() {
    it('should return the sum of the two rounded numbers', function() {
        assert.equal(calculate.calculateNumber(3.4, 4.6), 8);
        assert.equal(calculate.calculateNumber(3, 4.6), 8);
        assert.equal(calculate.calculateNumber(-1, 3.3), 2);
    });
});