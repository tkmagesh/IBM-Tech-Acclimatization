var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require('path');

var dataFile = path.join(__dirname, '../data', 'products.json' )

/* GET products listing. */
router.get('/', function (req, res, next) {
    fs.readFile(dataFile, { encoding : 'utf-8'}, (err, fileContents) => {
        res.send(fileContents)
    })
});

router.get('/:id', function (req, res, next) {
    const id = Number(req.params.id)
    const product = productsList.find(p => p.id === id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).end()
    }
});

router.post('/', function (req, res, next) {
    const newProduct = req.body
    newProduct.id = productsList.reduce((result, product) => result > product.id ? result : product.id, 0) + 1
    productsList.push(newProduct)
    res.status(201).json(newProduct)
});

router.put('/', function (req, res, next) {
    res.send('The given product is updated');
});

module.exports = router;
