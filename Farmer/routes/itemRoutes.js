const express = require('express')

const addItem = require('../controllers/itemController').post_item
const getItem = require('../controllers/itemController').get_items

const router = express.Router();

router.post('/',addItem);
router.get('/',getItem);

module.exports = router;