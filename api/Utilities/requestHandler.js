var sql = require('mssql')

var config = {
    server: 'wayfinderdatabaseserver.database.windows.net',
    database: 'WayFinderDatabaseDEV',
    user: 'wayfinder',
    password: 'FinderWay@123',
    port: 1433,
    encrypt: true
};

exports.handle = function (req, res, sqlQuery) {
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(sqlQuery, function (err, response) {
            if (err) console.log(err)
            // send records as a response
            return res.send(response.recordset);
        });
    });
}