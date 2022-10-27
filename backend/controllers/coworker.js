const User = require('../models/User')

exports.getAllCoworker = (req, res, next) => {

    User.find({_id: {$ne: req.auth.userId}})
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));

   

}
exports.getOneCoworker = (req, res, next) => {
    User.findOne({ _id: req.auth.userId})
    .then(userHome => {
        User.findOne({_id: req.params.id})
    .then(user => {
        
        const coworker = {
            ...user._doc,
            userHome: req.auth.userId,
            isAdmin: userHome.isAdmin

        }
        res.status(200).json(coworker)})
    .catch(error => res.status(404).json({ error }));

    })
    .catch(error => res.status(500).json({ error}))

}