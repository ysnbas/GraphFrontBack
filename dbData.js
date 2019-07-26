const sql = require('mssql');

var webconfig = {
    user: 'adisko88',
    password: 'kavitr.12',
    server: 'MEDIPOL.mssql.somee.com',
    database: 'MEDIPOL'
};


module.exports.degerler = function (req, res) {
    sql.connect(webconfig, function (err) {
        if (err) console.log(err);
        var request1 = new sql.Request();
        request1.query("select * from tbl_degerler", function (err, data) {
            if (err) {
                console.log(err);
            }
            sql.close();
            res.render('anasayfa', { veri: data.recordset })
        });
    });
}