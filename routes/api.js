const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/userAuthentication', err => {
    if (err) {
        console.error('!Error' + err)
    } else {
        console.log('Connected to mongodb Successful')
    }
})

router.get('/', (req, res) => {
    res.send('From the API server')
})

//registration api
router.post('/register', (req, res) => {
    // const userData = req.body
    // console.log('user body',req.body)
    const user = new User(req.body)
    console.log('user ', user)
    user.save((error, user) => {
        if (error) {
            console.log(`User not save Error = ${error}`)
            res.status(400).send(err);
        } else {
            res.status(200).send(user)
            console.log(`user save successfully `)
        }
    })
})

//login api
router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            res.status(400).send(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email id')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password')
                } else {
                    res.status(200).send(user);
                }
            }
        }
    })
})

//events api code == static value 
router.get('/events',(req,res) =>{
    let events =[
        {
            "id":"01",
            "name":"auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04023T"
        },
        {
            "id":"02",
            "name":"car Expoa",
            "description":"lorem ipsum adsf",
            "date":"2012-04023T"
        },
        {
            "id":"03",
            "name":"auto Expo aoais",
            "description":"lorem ipsum adsf",
            "date":"2012-04023T"
        },
        {
            "id":"04",
            "name":"auto Expo easdv",
            "description":"lorem ipsum adf",
            "date":"2012-04023T"
        },
        {
            "id":"05",
            "name":"auto Expoewf ",
            "description":"lorem ipsum asdf",
            "date":"2012-04023T"
        },
        {
            "id":"06",
            "name":"auto Expo adsf",
            "description":"lorem ipsumafes",
            "date":"2012-04023T"
        },

    ]

    res.json(events)
})

router.get('/special',(req,res) =>{ 
    let events =[
        {
            "id":"01",
            "name":"auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04023T"
        },
        {
            "id":"02",
            "name":"car Expoa",
            "description":"lorem ipsum adsf",
            "date":"2012-04023T"
        },
        {
            "id":"03",
            "name":"auto Expo aoais",
            "description":"lorem ipsum adsf",
            "date":"2012-04023T"
        },
        {
            "id":"04",
            "name":"auto Expo easdv",
            "description":"lorem ipsum adf",
            "date":"2012-04023T"
        },
        {
            "id":"05",
            "name":"auto Expoewf ",
            "description":"lorem ipsum asdf",
            "date":"2012-04023T"
        },
        {
            "id":"06",
            "name":"auto Expo adsf",
            "description":"lorem ipsumafes",
            "date":"2012-04023T"
        },

    ]

    res.json(events)
})

module.exports = router;