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

//PUT 

$(".waitingBurger").on("click", updateBurger)
 $(".eatAgainBurger").on("click", updateBurger)  

function updateBurger(){
  
     const id = $(this).attr("data-id")
   
    $.ajax({
                url:"/" + id,
                method: 'PUT'
           
            })
            .then(response => {
             window.location = '/'})
            .catch(err => {console.log(err)})
    
    }










})