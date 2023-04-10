import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    commentCount: Number,
    retweetCount: Number,
    username: String,
    handle: String,
    time: String,
    image: String
}, {collection: 'tuits'});

export default schema;
