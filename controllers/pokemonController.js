module.exports.viewAll= function(req, res, next) {
    const pokemons= [{
        id: 1,
        title: 'Pikachu',
        HP: '40HP',
        img: 'https://secure.img1-fg.wfcdn.com/im/77981853/resize-h755-w755%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg',
        powerOne: 'Gnaw',
        powerTwo: 'Lightning Bolt'
    },
    {
        id: 2,
        title: 'Shining Raichu',
        HP: '70HP',
        img: 'https://www.thefactsite.com/wp-content/uploads/2016/05/raichu-facts-pokemon-702x347.jpg',
        powerOne: 'Thundersquall',
        powerTwo: 'Electro Ball'
    }];
    res.render('index', {pokemons});
}