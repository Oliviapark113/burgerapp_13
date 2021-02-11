const orm = require('../config/orm.js')

var burger ={

selectAll: function(cb){
     orm.selectAll("burgers", function(res){
         cb(res);
     })
},

insertOne: function(col, colVal, cb){
    orm.insertOne(col, colVal, function(res){
        cb(res);
    })
},

updateOne: function(col, colVal, condition, cb){

    orm.updateOne(col, colVal, condition, function(res){
        cb(res)
    })
}




}

// orm.selectAll()
// orm.insertOne()
// orm.updateOne()



module.exports = orm;