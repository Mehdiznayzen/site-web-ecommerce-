const express = require('express')
const router = express.Router()
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
        console.log('Connect to databse table (Person)')
    }
})

router.post('/', (req, res) => {
    const newPerson = {
        id : Math.floor(Math.random() * 1000),
        firstName : req.body.firstName,
        secondName : req.body.secondName,
        email : req.body.email,
        password : req.body.password,
    }
    const query = 'INSERT INTO person (id, firstName, secondName, email, password) Values(?, ?, ?, ?, ?)'

    connection.query(query, [newPerson.id, newPerson.firstName, newPerson.secondName, newPerson.email, newPerson.password], (error) => {
        if(error){
            res.status(404).send('Error : ', error)
        }else{
            res.status(200).send('The person is saved .')
        }
    })
})

module.exports = router