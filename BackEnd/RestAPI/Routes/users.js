const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('../database.js');
const User = require('../Models/user');
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.get('/', async (req, res, next) => {  //to get all users
    try {
        const result = await User.find();
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});


router.post('/', async (req, res, next) => { 
    const {Password,Result} = req.body
    try {
      const newUser = await User.create({password:Password,result:Result});
      res.status(200).json({message:"data added", data:newUser})
    }
    catch (err) {
        return res.status(500).json({
            error: err
        })
    }
});



module.exports = router;