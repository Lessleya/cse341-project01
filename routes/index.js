const routes = require('express').Router();

routes.get('/', (req, res) => 
{
    res.send('Hello, Lesliee Cruz');
});

module.exports = routes;