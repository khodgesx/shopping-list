const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    category: String,
    notes: String,
    list: { type: Schema.Types.ObjectId, ref: 'List' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;