const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Contacts } = require('../models/contacts');

//localhost:3000/contacts/list
router.get('/list', (req, res) => {
    Contacts.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in retriving Contacts :' + JSON.stringify(err));
        }

    })
})


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Records with given id : ${req.params.id}`)

    Contacts.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving by id :' + JSON.stringify(err)) }
    })
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id : ${req.params.id}`)

    var contact = {
        name: req.body.name,
        surname: req.body.surname,
        number: req.body.number,
        birthday: req.body.birthday,
        address: req.body.address
    };
    Contacts.findByIdAndUpdate(req.params.id, {$set:contact}, {new : true}, (err, doc) =>{
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving by id :' + JSON.stringify(err)) }
    });
});

router.delete('/id:', (req, res)=>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Records with given id : ${req.params.id}`);

    Contacts.findByIdAndDelete(req.params.id, (err, doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log('Error in Contacts Delete :' + JSON.stringify(err));}
    })
});




router.post('/', (req, res) => {
    var contact = new Contacts({
        name: req.body.name,
        surname: req.body.surname,
        number: req.body.number,
        birthday: req.body.birthday,
        address: req.body.address
    });
    contact.save((err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log('Error in Contact save :' + JSON.stringify(err)); }
    })
})
module.exports = router;