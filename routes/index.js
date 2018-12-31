var express = require('express');
var router = express.Router();
var mysql = require('../database')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// 登录
router.post('/login', (req, res, next) => {
    res.render('login')
    const username = req.body.username
    const password = req.body.password
    console.log('username', username)
    var query = 'SELECT * FROM author WHERE authorName' + mysql.escape(username) + 'AND authorPassword=' + mysql.escape(password)
    console.log('query', query)
    mysql.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err)
        }
        user = rows[0]
        if (user) {
            res.redirect('/')
        }
    })
})
module.exports = router;
