

let givingToConsole = document.getElementsByTagName("input")
let click = document.getElementsByTagName("button")[0]




let span = document.getElementsByTagName("span")

click.onclick=sum




 givingToConsole[1].onclick=myFunction
// if(givingToConsole[0]!=null && givingToConsole[1]!=null){
//     myFunction();
// }

// document.getElementById("butt").disabled = true;

function myFunction() {

    document.getElementById("butt").style.backgroundColor = "#1BDE52";
    document.getElementById("butt").style.cursor = 'pointer';

    // $(document).ready(function(){
    //   $("button").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "pink");
    //   });
    // });
  }

function sum(){


    console.log(givingToConsole[0].value);
    console.log(givingToConsole[1].value);
    let tom= parseFloat( givingToConsole[0].value,10);
    let jerry=  parseFloat(givingToConsole[1].value,10);
    span[0].innerHTML=(tom+jerry);
    span[1].innerHTML=(tom-jerry);
    span[2].innerHTML=(tom*jerry);
    span[3].innerHTML=(tom/jerry);
    
    if(isNaN(tom+jerry) ){
       alert("enter valid number")
       givingToConsole.innerHTML='invalid'
  }

}
