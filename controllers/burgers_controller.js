var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");





router.get("/", function(req, res) {
   burger.selectAll(function(data){

    res.render("index", {burgers:data});
   })
  });


router.post("/", function(req, res) {

  burger.insertOne("burger_name", req.body.burger_name, function(data){

    res.status(200).send()
  })
 
});



router.put("/:id", function(req, res) {
     const id= req.params.id
     //find burger read row of data 
     burger.selectOne({id:req.params.id}, function(data){
        // What is current value of devour 
       const foundBurger = data[0]
       
      if(foundBurger.devoured === 0){
          foundBurger.devoured = 1;
      }
      else{
        foundBurger.devoured = 0;
      }
    
     burger.updateOne("devoured", foundBurger.devoured, {id:id},function(data){
          res.status(200).end()

     })

  
     })


  
 
});








module.exports = router;







