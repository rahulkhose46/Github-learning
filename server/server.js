
const mysql = require('mysql');
//connection configration

const connection = mysql.createConnection({
       hostname:'localhost',
       user:'root',
       password:'',
       database:'employee',
});
//database connection
connection.connect((err)=>{
     if(err) throw err;
   console.log('connected!');
})

module.exports = connection;
