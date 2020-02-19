const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true
});

BlogPost.create({
    title: 'First Blog',
    body: 'This is my first blog.'
}, (error, blogpost) => {
    console.log(error, blogpost)
});


