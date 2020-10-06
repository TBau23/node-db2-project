const express = require('express');

const db = require('../database/connection.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*').from('cars')
    .then(cars => {
        res.status(200).json({ data: cars})
    })
    .catch(error => {
        res.status(500).json({error: error})
    });
});

router.get('/:id', (req, res) => {
    db('cars').where({VIN : req.params.id})
    .then(car => {
        res.status(200).json({ data: car})
    })
    .catch(error => {
        res.status(500).json({error: error})
    });
});

router.post('/', (req,res) => {
    const carInfo = req.body;

    db('cars').insert(carInfo, 'id')
    .then(id => {
        res.status(201).json({data: id})
    })
    .catch(error => {
        res.status(500).json({error : error})
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;

    db('cars').where({VIN : req.params.id}).update(changes)
        .then(count => {
            res.status(200).json({data: count})
        })
        .catch(error => {
            res.status(500).json({error: error})
        });
});

router.delete('/:id', (req,res) => {
    db('cars').where({VIN: req.params.id}).del()
    .then(count => {
        res.status(200).json({data: count})
    })
    .catch(error => {
        res.status(500).json({error: error})
    });
})


module.exports = router;