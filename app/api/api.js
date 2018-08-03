// // import mysql from 'mysql';
// // import express from 'express';

// export function postRequest(event, data) {
//   //   const app = express();
//   //   // Set up connection to database.
//   //   const connection = mysql.createConnection({
//   //     host: 'localhost',
//   //     user: 'opanitch_jbaruf',
//   //     password: 'Br0Ch!ll',
//   //     database: 'opanitch_hermes'
//   //   });
//   // /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // //////////////////////                                                                 //////////////////
//   // //////////////////////Script to Write info from React.js into MySQL DB                  //////////////////
//   // //////////////////////                                                                 //////////////////
//   // /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // /////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //   function postRequest() {
//   //     let query;
//   //     // Connect to database.
//   //     connection.connect();
//   //     // Listen to POST requests to /users.
//   //     app.post('/users', function(req, res) {
//   //       // Get sent data.
//   //       var user = req.body;
//   //       // Do a MySQL query.
//   //       query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
//   //         // Neat!
//   //         console.log(err, result);
//   //       });
//   //       res.end('Success');
//   //     });
//   //     app.listen(3000, function() {
//   //       console.log('Example app listening on port 3000!');
//   //     });
//   //   }
// }

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // //////////////////////                                                                 //////////////////
// // //////////////////////Script to grab into from MySQL DB and Do Stuff with it\          //////////////////
// // //////////////////////                                                                 //////////////////
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////
// export function getData() {
//   //   const app = express();
//   // Set up connection to database.
//   const connection = mysql.createConnection({
//     host: '50.87.19.147',
//     user: 'opanitch_jbaruf',
//     password: 'Br0Ch!ll',
//     database: 'opanitch_hermes'
//   });

//   console.log('opening connection');
//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }

//     console.log('connected as id ' + connection.threadId);
//   });

//   connection.query(
//     'Selct Distinct t1.Move_Title, count(t1.Move_Title), Min(t1.date), t2.Completed FROM Form_Submissions LEFT JOIN Completed on Form_Submissions.Movie_Title = Forms_Submissions.Movie_Title GROUP BY t1.Move_Title',
//     function(err, rows, fields) {
//       if (err) {
//         throw err;
//       }

//       console.log('The rows: ', rows);
//       console.log('The fields: ', fields);
//     }
//   );

//   connection.end();
// }

// Just seeing what happens