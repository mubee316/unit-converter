const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");  
const result2 = document.getElementById("result2");  
let temp;

function convert(){
     
if(toFahrenheit.checked){
    temp = Number(textBox.value)
    temp = temp * 9/5 + 32

    result.textContent = temp + `\u00B0F`

   
} else if(toCelsius.checked){
    temp = Number(textBox.value)
    temp = (temp - 32) * 5/9

    result.textContent = temp + `\u00B0C`
    
}else if(toFahrenheit.checked && toCelsius.checked){
    temp = temp * 9/5 + 32

    result.textContent = temp + `\u00B0F`
     
    temp = (temp - 32) * 5/9

    result2.textContent = temp + `\u00B0C`

}
else{
    result.textContent = "select a unit"
}
}
