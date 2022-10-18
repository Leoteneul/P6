const mongoose = require('mongoose')
const postSchema = mongoose.Schema({


    userId: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number },
    my: { type: Boolean},
    commentaires: { type: Array },
    usersLiked: { type: Array },
    imageUrl: { type: String },
    imagePostUrl: { type: String }
    
    
});



module.exports = mongoose.model('Post', postSchema)