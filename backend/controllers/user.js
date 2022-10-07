const bcrypt = require('bcrypt');
const User = require('../models/User');



exports.signup = (req, res, next) => {
    
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#_?&])[A-Za-z\d@$!%_*#?&]{8,}$/
    
    if(!strongPassword.test(req.body.password)){

        return res.status(400).json({message: 'mdp trop simple'})
        
    }else{
        
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur Créé !'}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
    }    
};
    