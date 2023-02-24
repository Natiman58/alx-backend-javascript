// Async testing in js
function getPaymentTokenFromAPI(sucess) {
    if (sucess === true) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        return Promise.resolve();
    }
}
module.exports = getPaymentTokenFromAPI;