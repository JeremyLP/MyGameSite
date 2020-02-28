const express = require('express');
const router = express.Router();
const connection = require("./conf");
const verifyToken = require('./middleware');
const bcrypt = require('bcryptjs');
const salt = '$2a$10$uZjL/5bsCnn4Ge7aIJEo1O';
const jwt = require('jsonwebtoken');
const jwtsecret = 'gdgfhegfhegegjeg';


router.get(
    '/'
), (req, res) => {
    connection.query(
        'SELECT * FROM adminUsers', (err, results) => {
            if(err) {
                res.json(err);
            } else {
                res.status(200).json(results);
            }
        }
    )
};


router.post(
    '/register',
    (req, res) => {
        connection.query(
            'INSERT INTO adminUsers (admin_name, admin_password) VALUES (?,?)', [req.body.admin_name, bcrypt.hashSync(req.body.admin_password, salt)],
            (err, results) => {
                if(err) {
                    res.status(500).send(err);
                } else {
                    req.body.id = results.insertId
                    res.status(201).json(req.body);
                }
            }
        )
    }
);

router.post('/login', (req, res) => {

    const user = req.body;
    const crypted = bcrypt.hashSync(req.body.admin_password, salt);

    connection.query(
        'SELECT * FROM adminUsers WHERE admin_name = ? AND admin_password = ?', [req.body.admin_name, crypted],
        (err, results) => {
            if(err || results.length === 0) {
                res.status(401).send('Unable to login');
            } else {
                jwt.sign(
                    {user},
                    jwtsecret, {expiresIn: '1h'},
                    (err, token) => {
                        if(err) {
                            res.status(501).send('JWT error');
                        } else {
                            res.status(200).json({ token });
                        }
                    }
                )
            }
        }
    )
});

router.put(
    '/:id', (req, res) => {
        connection.query(
            'UPDATE adminUsers SET admin_name = ?, admin_password = ? WHERE id = ?', [req.body.admin_name, req.body.admin_password, req.params.id],
            (err, results) => {
                if(err) {
                    res.json(err);
                } else {
                    connection.query{
                        'SELECT * FROM adminUsers WHERE id = ?', [req.params.id],
                        (err, results) => {
                            if(err) {
                                res.json(err);
                            } else {
                                res.json(req.body);
                            }
                        }
                    }
                }
            }
        )
    }
);

router.delete(
    '/:id', (req, res) => {
        connection.query(
            'SELECT * FROM adminUsers WHERE id = ?', [req.params.id],
            (err, results) => {
                if(err) {
                    res.json(err);
                } else if (results.length === 0) {
                    res.status(404).json('Invalid id');
                } else {
                    connection.query(
                        'DELETE FROM adminUsers WHERE id = ?', [req.params.id],
                        (err) => {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json(results[0]);
                            }
                        }
                    )
                }
            }
        )
    }
);

module.exports = router;