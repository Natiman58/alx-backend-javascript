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

// Define a route for available paymenta page
app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    })
})

// To automatically parse JSON request and make them available in req.body
// adds JSON middleware to the express application
app.use(express.json())

// Define a route for a login endpoint
app.post('/login', (req, res) => {
    const userName = req.body.userName;
    res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
    console.log('API available on localhost port 7865')
})
module.exports = app;