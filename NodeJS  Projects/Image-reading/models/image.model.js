const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
});

const Post = new mongoose.model("image", postSchema);

module.exports = Post;