const mongoose = require("mongoose");

// Make scheme for user
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    win: {
        type: Number,
        default: 0
    },
    lose: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model("User", UserSchema);

module.exports = User