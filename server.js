const express = require('express')
const hbs = require('hbs')
const app = express()

const port = process.env.PORT || 3000;


// expresss hbs engine
app.use( express.static( __dirname + '/views') ) 
app.set('view engine', 'hbs')

require('./HBS/helpers/helpers')
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/',(req,res) => {
    res.render('home',{
        foto : 'https://i.pinimg.com/originals/7a/54/60/7a54604548494d1b09822a91bee16904.jpg',
        nombre: 'yolANDA',
        area : 'modelaje',
        ciudad : 'Guayaquil,Ec',
        email : 'yoland@mdl.com',
        telefono : '+593-0997748956',
        espanol: '75%',
        ingles: '80%'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        foto : 'https://www.marocsmile.com/upload/563/57d9e948383ca6ab26f838d62fc9404f.jpg',
        nombre: 'mONIca',
        area : 'modelaje',
        ciudad : 'Bogota,Co',
        email : 'mishca@gmail.com',
        telefono : '+57-0697854123',
        espanol: '50%',
        ingles: '95%'
    })
})

app.listen(port, () => {
    console.log(`escuchando el puerto ${port}`)
});


