"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = {
    description: { type: String, required: true, trim: true },
    postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    post: { type: Schema.Types.ObjectId, ref: 'Post' }
}

module.exports = mongoose.Schema(commentSchema);
