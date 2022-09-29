const makeMeATable=()=>{
    if (firstValue.value==""||secondValue=="") {
        alert("Input a value to be evaluated")
    }else{
        evalTable.innerHTML = ""
        for (let i = 1; i <= secondValue.value; i++) { 
            result = "<tr>"
            for (let j = 1; j <= firstValue.value; j++) {  
                if (selection.value == "*") {
                    result += `
                    <td>${i} * ${j} = ${i*j}</td>
                    `
                }
                else if (selection.value == "+") {
                    result += `
                    <td>${i} + ${j} = ${i+j}</td>
                    `
                }
                else if (selection.value == "-") {
                    result += `
                    <td>${i} - ${j} = ${i-j}</td>
                    `
                }
                else if (selection.value == "/") {
                    result += `
                    <td>${i} / ${j} = ${i/j}</td>
                    `
                }
            } 
            result += "</tr>"
            evalTable.innerHTML += result
        }
    }
}
