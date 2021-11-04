var express = require('express');
var router = express.Router();
const { Portfolio, Wallet } = require('../lib/models');
const yahooStockPrices = require('yahoo-stock-prices');

/* GET home page. */
//Placeholder route
router.get('/', function(req, res, next) {
  res.send('This is the API router')
});

//Basic Routes //Restful routes RESTFul routes
//1. GET / api / v1 / protfolio - Fetch all the rows in the Protfolio table
//2. POST /api/v1/protfolio - Create an item in the protfolio
//3.DETETE /api/v1/portfolio - Delete a portfolio item (selling the item)

//4. GET /api/v1/wallet - this will fetch the current wallet value -
//5. PUT /api/v1/wallet - this will update the value of the money in your wallet  - 

//6. SEARCH 
// GET /api/v1/search/:symbol //example: http:/localhost:3000/api/v1/search/AAPL
 
//1
router.get('/portfolio', async function (req, res, next) {
    //the query should fetch all the rows in the portfolio table
    let items = await Portfolio.findAll({});
    res.json(items);
});

//6 search endpoint
router.get('/search/:symbol', async function (req, res, next) {
    //req.params is goind to have the value of the symbol
    console.log(req.params)
    //let items = await Portfolio.findAll({});
    //res.json({});
    try {
        const data = await yahooStockPrices.getCurrentData(req.params.symbol);
        res.json({ success: true, data: data });
    } catch (err) {
        console.log(err)
        res.json({ success: false, data: {} });
    }
});

//2

router.post('/portfolio', async function (req, res, next) {
    //this is where the information is available to us as req.body
    console.log(req.body);
    //the query create an item in the protfolio table
    let item = await Portfolio.create(req.body);
    res.json(item);
});

router.delete('/portfolio/:id', async function (req, res, next) { //:id means that i can plug in the id i want to delete
    //we are going to lookupthe value of the id and then have 
    //the database delete the item with id = value
    //this is where the information is available to us as req.body
    // req.params gets us the values in the URL above
    console.log(req.params);
    //the query create an item in the protfolio table
    let item = await Portfolio.destroy({ where: { id: req.params.id } });
    res.json(item);
});





module.exports = router;
