const express = require('express')
const app = express()
const port = 7865

// Define a route for the index home end point
app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

// Define the route for the cart endpoint
// id parameter should only be number
app.get('/cart/:id(\\d+)', (req, res) => {
    const cartID = req.params.id;
    res.send(`Payment methods for cart ${ cartID }`);
});

app.listen(port, () => {
    console.log('API available on localhost port 7865')
})
module.exports = app;