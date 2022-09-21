const routes = require('express').Router();

routes.get('/', (req, res) => 
{
    res.send('Hello, my friend');
});

module.exports = routes;