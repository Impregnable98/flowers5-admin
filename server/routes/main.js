const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const pool = require('../data/config');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app) {
    app.get('/',(req,res) => {
        res.end('main');
    })

    app.get("/api", (req, res) => {
        pool.query('SELECT pagetitle FROM modx_site_content WHERE class_key = "msCategory" AND parent = 2', (error, result) => {
            res.send(result);
        });
    });

    app.post("/addcategory", urlencodedParser, function(req, res) {
        const pagetitle = req.body.pagetitle;
        const description = req.body.pagetitle;
        const alias = req.body.pagetitle;

        pool.query('INSERT INTO modx_site_content SET pagetitle = ?,description = ?,alias = ?,parent = 2,class_key = "msCategory",published = 1,template = 1 ' ,[pagetitle,description,alias], (error, result) => {
            console.log(pagetitle);
        });

    });
}

