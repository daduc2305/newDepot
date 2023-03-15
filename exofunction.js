/*function displayValue(values){
    for (let i = 0; i <values.length; i++){

    let value = values [i]
    console.log("la valeur est ", value)
}
}

displayValue([4, 45, 11, 45])
console.log(typeof(displayValue))

*/


function multiplyby2(number, displayValue){
    let res = number * 2

     displayValue(res)
   
    return res
}

function superDisplay(value){
    console.log("superr!!!!!!!")
    console.log(value)

}


multiplyby2(4,superDisplay)