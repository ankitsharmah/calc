

let givingToConsole = document.getElementsByTagName("input")
let click = document.getElementsByTagName("button")[0]

click.onclick=sum

let span = document.getElementsByTagName("span")

function sum(){
    
    console.log(givingToConsole[0].value);
    console.log(givingToConsole[1].value);
    let tom= parseInt( givingToConsole[0].value,10);
    let jerry=  parseInt(givingToConsole[1].value,10);
    span[0].innerHTML=(tom+jerry);
    span[1].innerHTML=(tom-jerry);
    span[2].innerHTML=(tom*jerry);
    span[3].innerHTML=(tom/jerry);


}