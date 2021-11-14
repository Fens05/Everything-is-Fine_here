

// set variable in the header for currnet date...

var label = moment()
moment.utc().format();
function currentdate(){

}
    

console.log(label)

//let saveBtn =doucment.getElementById("button")
//saveBtn.addEventListiner("click", save);
//doucment.getElemtnById.addEventListiner("click", save);
//function save(){
 ////   document.getElementById("textarea".innerHTML) 






$( "button" ).click(function() {
    console.log( "save" );
});

$( "button" ).on( "click", function() {
    //var textarea = saveBtn(){
        ///(.this)
   // }
    console.log( ".textarea" );
});


//set schedule hours...

const schedule = document.querySelector("scheduler")

for (let hour = 9; hour <18; hour++) {
    
    document.write([hour])
    console.log(hour)
}
    // event listner for save button



    // save to local storage
  
//animation with schedule events..
    

$("textarea").css({ 
     "background-color": "green",
    "color": "black",
    "font-size": "20px",
    "padding": "15px",
});
 

$("textarea").on({
    mouseenter: function(){
      $(this).css("background-color", "white");
    }, 
    mouseleave: function(){
      $(this).css("background-color", "orange");
    }, 
    
    click: function(){
      $(this).css("background-color", "red");
   } 
  });

  

  //var saveMe$("#text" + i).val();
 // calderNotes[i] = saveMe
 // colnsole.log("calenderNotes{i upate to:" "calender");

 