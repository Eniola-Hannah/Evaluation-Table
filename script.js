const makeMeATable=()=>{
    evalTable.innerHTML = ""
    for (var i = 1; i <= firstValue.value; i++) { 
        let result = "<tr>"
        for (var j = 1; j <= secondValue.value; j++) {  
            evaluation = `${i} * ${j} = ${i*j}`
            result += `
                <td>${evaluation}</td>`
            result += "</tr>"
            evalTable.innerHTML += result
            if (selection.value == "*") {

            }
            else if (selection.value == "+") {
                evaluation = `${i} + ${j} = ${i+j}`
                result += `
                    <td>${evaluation}</td>`
                result += "</tr>"
                evalTable.innerHTML += result

            }
            else if (selection.value == "-") {
                evaluation = `${i} - ${j} = ${i-j}`
                evalTable.innerHTML += `
                    <td> ${evaluation}</td>`
            }
            else if (selection.value == "/") {
                evaluation = `${i} / ${j} = ${i/j}`
                evalTable.innerHTML += `
                    <td> ${evaluation}</td>`
            }
        } 
    }
}
