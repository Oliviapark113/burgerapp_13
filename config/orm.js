const connection = require("./connection.js");


const orm =
{

selectAll:function(tableInput , cb){
let queryString= "SELECT * FROM ??"

    connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });

}, 

insertOne: function(col, colVal, cb){
    let queryString = "INSERT INTO burgers (??) VALUES (?);"

    connection.query(queryString, [col, colVal],function(err, result){
        if(err){
            throw err;
        }
        cb(result)
    });

}, 

updateOne: function(col, colVal, condition, cb){
    let queryString = "UPDATE burgers SET ?? = ? WHERE ? ;"
    
     connection.query(queryString, [col, colVal, condition],function(err, result){
      if(err){
            throw err;
        }
        cb(result)
    });



}



}



module.exports = orm;