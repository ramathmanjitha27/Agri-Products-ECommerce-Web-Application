const express = require('express');
const addToCart = require('../controllers/cartController').add_to_cart;
const getCartItems = require('../controllers/cartController').add_to_cart;
const router = express.Router();

router.get('/:id',getCartItems);
router.post('/:id' , addToCart);


module.exports = router;