const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db'); //importing the connection from db.js
// ORM


//Protfolio Table
class Portfolio extends Model {

}

Portfolio.init({
    // Model attributes are defined here
    symbol: { //each stock that we're buying
        type: DataTypes.STRING,
        // allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    price: {
        type: DataTypes.STRING
        // float
        // allowNull defaults to true
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Portfolio', // We need to choose the model name
});

//Wallet

class Wallet extends Model {

}

Wallet.init({
    // Model attributes are defined here
    value: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Wallet', // We need to choose the model name
});

const seedTheWallet = async () => {
    let wallet = await Wallet.findOne({});
    if(!wallet){
        await Wallet.create({value: 100000});
    }
};
seedTheWallet();


sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    Portfolio, Wallet
};