
 const express = require('express');
 const bodyParser = require('body-parser');
 const api = require('./server/router');

 const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
    extended:true
 }));
 app.use('/api',api);

 app.get('/',(req,res)=>{
  res.send('working api');

}).listen(3000,()=>{
    console.log('server running!');
});
