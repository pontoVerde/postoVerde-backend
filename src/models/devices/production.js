const mongoose = require('../../database/index');

const { Schema } = mongoose;

const productionSchema = new Schema({
    deviceId: {
        type: String,
    },
    production: {
        type: Number,
        default: 0
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

const Production = mongoose.model("Production", productionSchema);

module.exports = Production;