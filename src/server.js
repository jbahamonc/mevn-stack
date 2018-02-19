const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const app = express()

// Routes
const Product = require('./routes/products')

//connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mevn')
    .then(() => {console.log('connected to mongodb successfully!!')})
    .catch(err => {console.error(err)})

// settings
app.set('port', process.env.PORT || 3000)
// app.set('view engine', 'html')

//Middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
// Prefijo para las rutas de los productos ej: /product/xxxxx
app.use('/products', Product)

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})
