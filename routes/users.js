const express = require('express');

const router = express.Router();

const user = require('./users_class.js')

let users = new user();

router.get('/', (req, res) => {
  res.send(users.displayAllUsers())
})

router.get('/:year', (req, res) => {
 let year = req.params.year
 res.send(users.displaySpecificUsers(year))
})

router.post('/:username/:email/:activationDate',(req, res) => {
    let username = req.params.username
    let email = req.params.email
    let activationDate = req.params.activationDate
    res.send(users.addNewUser(username, email, activationDate))
})

router.patch('/:username/:email/:activationDate',(req, res) => {
    let username = req.params.username
    let email = req.params.email
    let activationDate = req.params.activationDate
    res.send(users.updateUser(username, email, activationDate))
})

router.delete('/:username', (req, res) => {
 let username = req.params.username 
 res.send(users.deleteUser(username))
})


module.exports = router; 