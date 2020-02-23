const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultDate = new Date();

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: defaultDate
    },
    image: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports =  BlogPost;