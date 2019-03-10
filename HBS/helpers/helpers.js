const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/parciales');

hbs.registerHelper( 'getCapitalizado', (texto)=>{
    return `${texto.charAt(0).toUpperCase()}${texto.substr(1).toLowerCase()}`;
});