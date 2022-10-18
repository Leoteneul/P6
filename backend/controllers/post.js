const Post = require('../models/Post')
const fs = require('fs')

exports.createPost = (req, res, next) => {

    const postObject = req.file ? {
        ...req.body,
        imagePostUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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

exports.getAllPost = (req, res, next) => {

    Post.find()
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));

   

}


exports.modifyAllPost = (req, res, next) => {

    const profil = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : {...req.body};

     
    Post.updateMany({userId: req.auth.userId}, { ...profil })
            .then(() => res.status(200).json({ message: 'post modifié!'}))
            .catch(error => res.status(401).json({ error }));

}

exports.modifyOnePost = (req, res, next) => {

    Post.findOne({_id: req.body.postId})
    .then(post => {
        if(post.userId != req.auth.userId){
            res.status(403).json({ error })
        }else{
            Post.updateOne({ _id: req.body.postId }, {description: req.body.description })
                .then(() => res.status(200).json({ message: 'Description modifié'}))
                .catch(error => res.status(401).json({ error }))
        }
    })
    .catch(error => res.status(500).json({ error }))
    

}

exports.deletePost = (req, res, next) => {
    
    Post.findOne({_id: req.body.postId})
        .then(post => {
            if(post.userId != req.auth.userId){
                res.status(403).json({ error })
            }else{
                const filename = post.imagePostUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.body.postId})
                        .then(() => res.status(200).json({ message: 'La sauce a bien été supprimé' }))
                        .catch(error => res.status(401).json({ error }));
                })
            }
        })
        .catch(error => res.status(500).json({ error }));
}

exports.getLiked = (req, res, next) => {

    Post.findOne({ _id: req.body.postId })
        .then(post => {
            const userCanLike = !post.usersLiked.includes(req.body.userId)
            const userWantsToLike = req.body.like === 1; 

            if(userCanLike && userWantsToLike){

                Post.updateOne({_id: req.body.postId},
                   {
                        $inc : {likes : 1},
                        $push : {usersLiked : req.body.userId}
                   })

                .then(() => res.status(201).json({ message: "Like ajouté" }))
                .catch(error => res.status(400).json({ error }));
            }
            if(!userCanLike && !userWantsToLike){

                Post.updateOne({_id: req.body.postId},
                   {
                        $inc : {likes : -1},
                        $pull : {usersLiked : req.body.userId}
                   })

                .then(() => res.status(201).json({ message: "Like supprimé" }))
                .catch(error => res.status(400).json({ error }));
            }



        })
        .catch(error => res.status(500).json( error ))


}