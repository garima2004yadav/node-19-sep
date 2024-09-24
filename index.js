const express = require('express');
const path = require('path')
const student = require('./routes/student')
const app = express();
const connection = require('./connection');
connection();
app.use(student)
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));
app.listen(3001,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on 3000")
    }
})