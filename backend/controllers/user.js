const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
// const fs = require('fs')


exports.signup = (req, res, next) => {
    
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#_?&])[A-Za-z\d@$!%_*#?&]{8,}$/
    
    if(!strongPassword.test(req.body.password)){

        return res.status(400).json({message: 'mdp tropeee simple'})
        
    }else{
        
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            job: '.' ,
            name: '.',
            imageUrl: `${req.protocol}://${req.get('host')}/images/profilDefault.png`
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur Créé !'}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
    }    
};

exports.login = (req, res, next) => {

    User.findOne({ email: req.body.email})
        .then(user => {
            if(user === null){
                res.status(401).json({ message: 'La paire email/mot eeeeeeede passe ne corresponds pas'})
            }else {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if(!valid){
                            res.status(401).json({ message: 'La paire email/mot de passe ne corresponds pas'})
                        }else {
                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    {userId: user._id},
                                    'salt',
                                    { expiresIn: '24h' }
                                )
                            })


                        }
                    })
                    .catch(error => res.status(500).json({ error }));
            }
        })
        .catch(error => res.status(500).json({ error }));
};


exports.home = (req, res, next) => { 

    
   User.findOne({ _id: req.auth.userId })
   .then((user) => res.status(200).json(user))
   .catch(error => res.status(404).json({ error }))
};

exports.modifyProfil = (req, res, next) => {
        
    console.log(req)

};

exports.modifyEmail = (req, res, next) => {

    const newMail = req.body.email
    User.findOne({ _id: req.auth.userId })
    .then(() => {

        User.updateOne({ _id: req.auth.userId}, {'email': newMail})
            .then(() => res.status(200).json({message: 'Objet Modifié'}))
            .catch(error => res.status(401).json({ error }))


    })


}