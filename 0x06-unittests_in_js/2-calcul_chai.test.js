const expect = require('chai').expect; // Using Expect style
const calculateNumber = require('./2-calcul_chai'); // 6✅


expect(calculateNumber("SUM", 1.4, 4.5)).to.be.equal(6)
expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4)
expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error')