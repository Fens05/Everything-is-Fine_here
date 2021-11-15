// colorblocks updating between past,present, future... when scorlled. & saved.?
// for each line in the day planner
    // list of rows in html
    // which hour each represents
    // and what the current hour is

//check that hour against current hour
//if in past format/match in past, future with future, current with current

let hour = ["9","10","11","12","13","14","15","16","17"]
    for (let i =0; i < 18; i++)
     
//this gave me an undefined error
//array.forEach(element => { ["9", "10","11","12","1","2","3","4","5"]
    
//}); 








// set variable in the header for currnet date...
///bsc gave me line 15... 

var label = moment()
//moment.utc().format()
    $("#currentDay").html(label.format('MMMM Do, YYYY'))



//$("#currentDay").text(moment().formant('dddd,mmmm,do'))



//var node = docuemnt.creatElement("text");
//var textnode = document.createTextNode("water")
//node.appendChild(textnode);
//docuemnt.getElementByID("mylist").appendChild(node);

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

  
  