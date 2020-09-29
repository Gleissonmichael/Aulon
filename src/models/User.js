const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    bithday: { type: String, unique: true, required: true },
    type: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('User', UserSchema);