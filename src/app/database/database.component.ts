	import { Injectable } from '@angular/core';
  import {Component} from '@angular/core';
  import {Http, Response, Headers} from '@angular/http';
  import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
@Injectable()
export class DatabaseComponent{
  

  constructor() { 
  	
//   var sql = require('mysql'); // MySql 

//   var connection = sql.createConnection({
//   host     : 'http://localhost/phpmyadmin/db_structure.php?server=1&db=reportDB',
//   user     : 'root',
//   password : '',
//   database : 'reportDB'
// });
// console.log('mysql'); 
// connection.connect();

// connection.query('SELECT * from user', function(err, results, fields) {
//   if (err) throw Error; 
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();
   }

  

}
