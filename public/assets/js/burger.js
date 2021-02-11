$(function(){
    const textarea = $('textarea')

     const form = $('form')

$("form").on("submit", function(e){
    e.preventDefault()

//POST 
$.ajax({
   url: '/',
   methos: 'POST',
   data: {
       burger:textarea.val()
   }
}).then(response =>{
    console.log(response)
    location.reload();
})











})








})