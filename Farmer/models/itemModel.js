const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }//,
    // date_added: {
    //     type: Date,
    //     default: Date.now
    // },
});
const Item = mongoose.model('item',ItemSchema);
module.exports = Item