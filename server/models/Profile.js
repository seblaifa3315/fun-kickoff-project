const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        availability: {
            type: Array,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);