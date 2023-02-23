const assert = require('assert');
const { calculate } = require('./0-calcul.js');

describe('calculate', function() {
    it('should return the sum of the two rounded numbers.', function() {
        assert.equal(calculate(1, 3), 4);
        assert.equal(calculate(1, 3.7), 5);
        assert.equal(calculate(1.2, 3.7), 5);
        assert.equal(calculate(1.5, 3.7), 6);
        assert.equal(calculate(1000e122222, 3.7), Infinity);
    });
});