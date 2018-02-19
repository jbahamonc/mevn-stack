const express = require('express')
const router = express.Router()
const Products = require('../models/Products')

router.get('/', (req, res) => {
    Products.find({}, function (err, products) {
        if (err) throw err
        res.json(products)
    })
})

router.post('/', (req, res) => {
    const prod = new Products(req.body)
    prod.save()
        .then(product => {
            res.status(200).json({msg: 'Producto agregado con exito'})
        })
        .catch(err => {
            res.status(400).json({msg: 'Error al agregar el producto'})
        })
})

router.delete('/:id', (req, res, next) => {
    Products.findByIdAndRemove(req.params.id, (err, product) => {
        if (err)
            res.json(err)
        res.json('El producto ha sido eliminado')
    })
})

router.put('/:id', (req, res, next) => {
    Products.findById(req.params.id, (err, product) => {
        if (!product)
            return next(new Error('No se encontro el producto'))
        product.name = req.body.name
        product.category = req.body.category
        product.price = req.body.price
        product.save()
            .then(product => {
                console.log('---> ' + req.body.name)
                res.json('Se ha actualizado el producto')
            })
            .catch(err => {
                res.status(400).send('No se pudo actualizar el producto')
            })
    })
})

module.exports = router
