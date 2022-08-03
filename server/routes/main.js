const pool = require('../data/config');

module.exports = function (app) {
    app.get('/',(req,res) => {
        res.end('main');
    })

    app.get("/api", (req, res) => {
        pool.query('SELECT pagetitle FROM modx_site_content WHERE class_key = "msCategory" AND parent = 2', (error, result) => {
            res.send(result);
        });
    });

}
