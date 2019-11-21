const express = require('express');
let router = express.Router();

// let { db } = require('./../libs/connect-db')();


let cervejas = [
    {
        nome: 'Heinekein',
        preco: 9,
        tipo: 'long neck'
    },
    {
        nome: 'Budweiser',
        preco: 9,
        tipo: 'long neck'
    },
    {
        nome: 'Stella Artois',
        preco: 9,
        tipo: 'long neck'
    }
];

const isEmpty = (obj) => (Object.entries(obj).length === 0 && obj.constructor === Object)

router.post('/cervejas', (req, res) => {
    let cervejasF = [];

    if ( !isEmpty(req.body) ) {
        console.log('filtrando....')
        cervejasF = cervejas.filter((c) => {
            return req.body.nome == '' || (req.body.nome !== '' && c.nome == req.body.nome);
        });
    }

    res.json(cervejasF);
});

router.delete('/cervejas', (req, res) => {
    let cervejasF = [];

    if ( !isEmpty(req.body) ) {
        console.log('filtrando....')
        cervejasF = cervejas.filter((c) => {
            return req.body.nome == '' || (req.body.nome !== '' && c.nome != req.body.nome);
        });
    }

    res.json(cervejasF);
});

module.exports = {
    router
};
