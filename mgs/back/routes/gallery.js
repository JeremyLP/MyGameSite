const express = require('express');
const router = express.Router();
const connection = require("./conf");




router.get('/', (req, res)=> {
    connection.query('SELECT * FROM gallery', (err, results) => {
        if(err) {
            console.log(err);
        } else {
            res.json(req.body);
        }
    })
});



module.exports = router;