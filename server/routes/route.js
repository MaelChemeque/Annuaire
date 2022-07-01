const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// retrieve phone book
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts) {
        console.log('got list of contacts');
        res.json(contacts);
    });
});
router.get('/contact/:name', (req, res, next) => {
    Contact.find({ first_name: req.params.name}, function(err, contacts) {
        console.log('got list of contacts');
        res.json(contacts);
    });
});

// add contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({msg: 'failed to save contact'});
        } else {
            console.log('contact added');
            res.json({msg: 'contact saved successfully'});
        }
        
    });
});


// delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            console.log('contact removed');
            res.json(result);
        }
    });
});

module.exports = router;