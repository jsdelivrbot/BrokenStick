var sql = require('mysql'); // MySql 

  var connection = sql.createConnection({
  host     : 'arn:aws:dynamodb:us-east-2:258802532907:table/Users',
  user     : 'root',
  password : '',
  database : 'reportDB'
});
console.log('mysql'); 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();