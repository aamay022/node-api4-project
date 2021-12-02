const express = require('express');

const router = express.Router();

const Users = require('../../mocks/data')
const credentials = require('../../mocks/credentials')



router.get('/', (req,res) => {
  res.json(Users.find())
})

router.post('/register', (req,res)=> {
  Users.create(req.body)
  .then(newUser => {
    res.json(newUser)
  })
})

router.post('/login', (req, res) => {
  const {username, password, role, token}  = credentials;

  if (req.body.username && password === req.body.password) {
    res.json({
      username,
      role,
      token
    })
  } else {
    res.status(403).json({ error: 'Incorrect username / password combination.' });
  }
  
})



module.exports = router;
