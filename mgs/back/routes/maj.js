const express = require('express');
const router = express.Router();
const connection = require("./conf");

router.post('/', (req, res)=> {
    connection.query('INSERT INTO maj (maj_title, maj_content, maj_img) VALUES (?,?,?)', [req.body.maj_title, req.body.maj_content, req.body.maj_img], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            req.body.id = results.insertID;
            res.json(req.body);
        }
    })
});


router.put(
    '/:id', (req, res) => {
        connection.query(
            'UPDATE maj SET maj_title = ?, maj_content = ? ,maj_img = ?', [req.body.maj_title, req.body.maj_content, req.body.title], (err, results) => {
                if(err) {
                    res.json(err);
                } else {
                    connection.query(
                        'SELECT * FROM maj WHERE id = ?', [req.params.id], (err) => {
                            if (err) {
                                res.json(err)
                            } else {
                                res.json(req.body);
                            }
                        }
                    )
                }
            }
        )
    }
)


router.get('/', (req, res)=> {
    connection.query('SELECT * FROM maj', (err, results) => {
        if(err) {
            console.log(err);
        } else {
            res.json(results);
            console.log(results);
        }
    })
});

module.exports = router;