const mongoose = require('mongoose');
const { Schema } = mongoose;

const detailsSchema = new Schema({
    agent: { type: String, required: true },
    lang: { type: String, required: true },
    platform: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    pixelRatio: { type: Number, required: true },
    isTouch: { type: Boolean, required: true },
    ip: { type: String, required: true },
});

const DetailsModel = mongoose.model('Details', detailsSchema);

module.exports = DetailsModel;
