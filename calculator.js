const display=document.getElementById("display");

function appendToDisplay(value){
    display.value+=value;
}

function clearValue(){
     display.value=""
}

function calculateOutput(){
   try{
     display.value=eval(display.value);
   }
   catch{
    display.value="Incorrect input"
   }
}