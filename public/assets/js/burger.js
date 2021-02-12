$(function(){
    const textarea = $('textarea')

     const form = $('form')

$("form").on("submit", function(e){
    e.preventDefault()

//POST 
$.ajax({
   url: "/",
   method: 'POST',
   data: {burger_name:textarea.val()}
   
}).then(response =>{
    console.log(response)
    location.reload();
})











})








})