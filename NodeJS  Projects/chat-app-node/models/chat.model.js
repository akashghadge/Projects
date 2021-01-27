const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        defaultValue: Date.now()
    }
})

const Chat = mongoose.model("chat-app", chatSchema);
module.exports = Chat;