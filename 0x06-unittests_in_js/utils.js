// A script to calculate the reesult according to the type
// using new created module Utils
const Utils = {
    calculateNumber(type, a, b) {
        if (type === "SUM") {
            return Math.round(a) + Math.round(b)
        };
        if (type === "SUBTRACT") {
            return Math.round(a) - Math.round(b)
        }
        if ((type === "DIVIDE") && (Math.round(b) !== 0)) {
            return Math.round(a) / Math.round(b)
        } else {
            return "Error"
        }
    },

};
module.exports = Utils;