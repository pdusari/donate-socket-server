"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantityRequired: { type: Number, required: true, trim: true },
    quantityInHand: { type: Number, required: false, trim: true, default: 0 },
    ageOfProduct: { type: Number, required: true, trim: true },
    isPostActive: { type: Boolean, required: false, trim: true },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    donationHistory: [{ type: Schema.Types.ObjectId, ref: 'DonationHistory', required: false }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', required: false }],
    createdAt: { type: Date, default: Date.now }
}

module.exports = mongoose.Schema(postSchema);
