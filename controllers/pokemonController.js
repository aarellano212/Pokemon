const{Pokemon} = require('../models')
module.exports.viewAll= async function(req, res, next) {
    const pokemon= Pokemon.findAll();
    console.log(pokemon)
    res.render('index', {pokemon});
}