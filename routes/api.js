var express = require('express');
var router = express.Router();
const { Portfolio, Wallet } = require('../lib/models');
/* GET home page. */
//Placeholder route
router.get('/', function(req, res, next) {
  res.send('This is the API router')
});

//Basic Routes
//1. GET / api / v1 / protfolio - Fetch all the rows in the Protfolio table
//2. POST /api/v1/protfolio - Create an item in the protfolio
//3.DETETE /api/v1/portfolio - Delete a portfolio item (selling the item)
//4. GET /api/v1/wallet - this will fetch the current wallet value - 
//5. PUT /api/v1/wallet - this will update the value of the money in your wallet  - 
 
//1
router.get('/portfolio', async function (req, res, next) {
    //the query should fetch all the rows in the portfolio table
    let items = await Portfolio.findAll({});
    res.json(items);
});
  

module.exports = router;
