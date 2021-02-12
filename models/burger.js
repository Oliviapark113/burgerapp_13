const orm = require('../config/orm.js')

var burger ={

selectAll: function(cb){
     orm.selectAll("burgers", function(res){
         cb(res);
     })
},

selectOne: function(condition, cb){
     orm.selectOne("burgers",condition, function(res){
         cb(res);
     })
},

insertOne: function(col, colVal, cb){
    orm.insertOne(col, colVal, function(res){
        cb(res);
    })
},

updateOne: function(col, colVal, condition, cb){
    console.log(col, colVal, condition)
    orm.updateOne(col, colVal, condition, function(res){

        cb(res)
    })
}


}





module.exports = burger;