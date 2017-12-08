var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kim147258',
    port: 3306,
    database: 'preorder'
});

conn.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
    var data = '';
    conn.query("SELECT * FROM test_board", function (err, rows, fields) {
        if(!err){

            data = JSON.stringify(rows);
            console.log(data);
            res.render('index', { title: 'Express', boards: data });
        }
    });

});

module.exports = router;
