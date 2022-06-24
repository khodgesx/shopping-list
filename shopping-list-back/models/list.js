const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: String,
    items: [],
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const List = mongoose.model('List', listSchema);

module.exports = List;