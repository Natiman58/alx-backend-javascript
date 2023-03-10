const assert = require('assert');
const calculateNumber = require('./0-calcul.js'); // 6✅

describe('calculateNumber', function() {
    it('should return the sum of the two rounded numbers.', function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
        assert.equal(calculateNumber(1000e122222, 3.7), Infinity);
    });
});