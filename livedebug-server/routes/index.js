const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const account = require('./account');
const transaction = require('./transaction');

router.get('/', (req, res) => {res.status(200).json({message: 'Home'})})

router.post('/register', userController.register);
router.get('/login', userController.login);
router.post('/verify', userController.verify);

router.use('/accounts', account);
router.get('/transactions', transaction);

router.use('/*', (req, res) => res.status(404).json({error: 'Not Found :('}))

module.exports = router