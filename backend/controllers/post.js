const Post = require('../models/Post')

exports.createPost = (req, res, next) => {

    const postObject = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : {...req.body};

    const post = new Post({
        ...postObject,
        userId: req.auth.userId,
        likes: 0,
        usersLiked: [],
    });

    post.save()
        .then(() => res.status(201).json({ message: 'Le Post est ajouté à la liste'}))
        .catch(error => res.status(400).json({ error }));


}

// exports.getAllPost = (req, res, next)