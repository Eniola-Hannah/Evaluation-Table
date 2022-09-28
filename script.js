const makeMeATable=()=>{
    for (var i = 1; i <= firstValue.value; i++) {
        let result = "<tr>"
        for (var j = 1; j <= secondValue.value; j++) {  
            parseInt(firstValue.value)
            parseInt(secondValue.value)
            if (selection.value == "*") {
                evaluation = `${i} * ${j} = ${i*j}`
                result += `
                    <td>${evaluation}</td>`
                result += "</tr>"
                evalTable.innerHTML += result

            }
            else if (selection.value == "+") {
                evaluation = `${i} + ${j} = ${i+j}`
                evalTable.innerHTML += `
                    <td>${evaluation}</td>`
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
