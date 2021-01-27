const { Router } = require("express");
const Chat = require("../models/chat.model");

const router = Router();

router.route("/show").get((req, res) => {
    Chat.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                "message": "fetching is not possible"
            })
        }
        res.json(data);
    })
})

router.route("/add").post((req, res) => {
    console.log("helllo");
    const user = req.body.username;
    const chatM = req.body.message;
    // console.log("byeeeeeeeeeeeeeeee");
    const newChat = new Chat({
        username: user, message: chatM
    })
    newChat.save().then(() => {
        res.status(200).json({
            "message": 'sent'
        })
    }).catch((err) => {
        res.status(404).json({
            "message": "not sent"
        })
    })
})

module.exports = router;