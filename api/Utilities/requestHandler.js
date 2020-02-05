var sql = require('mssql')
var APIResponse = require('./common')
var config = {
    server: 'wayfinderdatabaseserver.database.windows.net',
    database: 'WayFinderDatabaseDEV',
    user: 'wayfinder',
    password: 'FinderWay@123',
    port: 1433,
    encrypt: true
};

exports.handle = function (sqlQuery, Operation) {
    return new Promise((resolve, reject) => {
        sql.connect(config, function (err) {
            if (err) {
                APIResponse.IsSuccess = false;
                APIResponse.Error = err;
                APIResponse.ErrorMessage = 'Please Contact your Administrator'
                reject(err)
            }
            // create Request object
            var request = new sql.Request();
            // query to the database and get the records
            request.query(sqlQuery).then((response, result,fields) => {
                //console.log('RESPONSE :- ', response)
                //console.log('RESULT :- ', result)
                //console.log('FIELDS :- ', fields)
                APIResponse.IsSuccess = true;
                APIResponse.ResponseData = response.recordset

                if(Operation){
                    switch (Operation.QueryType) {
                        case "INSERT":
                            // request.output('insertedId', sql.Int)
                            // request.("set @insertedId =  SCOPE_IDENTITY()").then(scopeData => {
                            //     console.log('[Inside Scope ]')
                            //     console.log(scopeData)
                            // }).catch()  
                            break;
                    
                        default:
                            break;
                    }
                }

                resolve(APIResponse)
            }).catch(err => {
                APIResponse.IsSuccess = false;
                APIResponse.Error = err;
                APIResponse.ErrorMessage = 'Please Contact your Administrator'
                reject(APIResponse);
            });
        });
    })
}