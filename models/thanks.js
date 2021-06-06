const mongoose = require('mongoose');

const thanksSchema = new mongoose.Schema({
    thanks: Number,
    user: String
});

const ThanksModel = module.exports = mongoose.model('thanks', thanksSchema);
/*
const messagess = mongoose.model('messagess', Schema({
    id: String,
    guild: String,
    messagecount: Number
}));
*/