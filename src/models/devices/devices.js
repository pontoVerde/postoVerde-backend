const mongoose = require('../../database/index');

const { Schema } = mongoose;

const devicesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    user_id: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Devices = mongoose.model("Devices", devicesSchema);

module.exports = Devices;