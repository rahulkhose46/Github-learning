const express = require('express');
const router = express.Router();
const connection = require('./server');

router.get('/employees',(req,res)=>{
    console.log('get employees');
    const $query = 'SELECT * FROM emp';
    connection.query($query,(err,rows,fields)=>{
        if(err) throw err;
        return res.status(200).json({
            error:false,
            data:rows,
            msg:'sucess!'
        });
    });
});

router.get('/employee/:id',(req,res)=>{
    console.log('get single employee');
    var id = req.params.id;
    const $query = `SELECT * FROM emp WHERE id=${id}`;
    connection.query($query,(err,rows,fields)=>{
        if(err) throw err;
        return res.status(200).json({
            error:false,
            data:rows[0],
            msg:'sucess!'
        });
    });
});
router.post('/employee',(req,res)=>{
        console.log('add employee');
        var name = req.body.name;
        var designation = req.body.designation;
        var salary = req.body.salary;
       //const $query = `INSERT INTO emp(name,designation,salary) VALUES(${name},${designation},${salary})`;
       const $query = "INSERT INTO emp (`name`, `designation`, `salary`) VALUES ('" + name + "', '" + designation + "', '" + salary +"');";
       connection.query($query,(err,rows,fields)=>{
           if(err) throw err;
           return res.status(200).json({
               error:false,
               data:rows,
               msg:'sucess!'
           });
       });
});
router.put('/employee/:id',(req,res)=>{
        console.log('update employee');
        var id =  req.params.id;
        var name = req.body.name;
        var designation = req.body.designation;
        var salary = req.body.salary;
       //const $query = `INSERT INTO emp(name,designation,salary) VALUES(${name},${designation},${salary})`;
       const $query = `UPDATE emp SET name='${name}',designation='${designation}',salary=${salary} WHERE id=${id}`;
       connection.query($query,(err,rows,fields)=>{
           if(err) throw err;
           return res.status(200).json({
               error:false,
               data:rows,
               msg:'sucess!'
           });
       });
});
router.delete('/employee/:id',(req,res)=>{
        console.log('delete employee');
        var id =  req.params.id;
       //const $query = `INSERT INTO emp(name,designation,salary) VALUES(${name},${designation},${salary})`;
       const $query = `DELETE FROM emp WHERE id=${id}`;
       connection.query($query,(err,rows,fields)=>{
           if(err) throw err;
           return res.status(200).json({
               error:false,
               data:rows,
               msg:'sucess!'
           });
       });
});
router.get('/test',(req,res)=>{
    res.send('Hello world');
})
module.exports = router;
