require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routeUser = require('./routes/user')
const cors = require('cors')


mongoose.connect(String(process.env.MONGOOSE_URL),
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(cors())

app.use(express.json());
app.use('/api/users', routeUser)


  module.exports = app