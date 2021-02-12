var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");





router.get("/", function(req, res) {
   burger.selectAll(function(data){
      console.log(data)
    // var hbsObject = {
    //   burgers: data
    // };

    res.render("index", {burgers:data});
   })
  });


router.post("/", function(req, res) {
 

  burger.insertOne("burger_name", req.body.burger_name, function(data){

    res.status(200).send()
  })
 
});


// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete('/api/cats/:id', function(req, res){
//   const id = req.params.id
//  cat.delete({id},function(data){
//   //  console.log(data)
//    res.status(200).end();
//  })


// })


module.exports = router;







