const expect = require('chai').expect; // Using Expect style
const calculateNumber = require('./2-calcul_chai'); // 6✅


expect(calculateNumber("SUM", 1, 2)).to.be.equal(3)