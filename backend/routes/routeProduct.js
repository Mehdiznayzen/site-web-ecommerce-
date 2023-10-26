const express = require('express')
const routerProduct = express.Router()
const mysql = require('mysql')

// Connect to database mysql
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : "Mehdi@1235",
    database : 'authentificationEcommerce'
}) 

connection.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log('Connect to databse table (Product)')
    }
})

routerProduct.get('/', (req, res) => {
    res.status(200).send('Home')
})

routerProduct.post('/', (req, res) => {
    const newProduct = {
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        category: req.body.category
    }
    const query = 'INSERT INTO product (id, title, price, category) values (?, ?, ?, ?)'
    connection.query(query, [newProduct.id, newProduct.title, newProduct.price, newProduct.category], (error, results) => {
        if (error) {
            res.status(404).send('Error : ' + error);
        } else {
            res.status(200).send('The product is saved.');
        }
    });
});

routerProduct.delete('/:id', (req, res) => {
    const { id } = req.params
    const query = 'DELETE FROM product where id = ?'
    connection.query(query, [id], (error) => {
        if(error){
            res.status(404).send('Error : ' + error)
        }else{
            res.status(200).send('The product is deleted')
        }
    })
})


module.exports = routerProduct