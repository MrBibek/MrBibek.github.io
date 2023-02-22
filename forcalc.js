let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let clear = document.querySelector(".clear")
let back = document.querySelector(".back")
let equal = document.querySelector(".equal")
let primary = document.querySelector(".primary")
let secondary = document.querySelector(".secondary")
let percent = document.querySelector(".percent")
let problems = document.querySelector("#problems")


let opeartorFunctioned = []
let opeartorRepeat = ['+', '-', '×', '÷']
let entries = []
let numbersEntered = []
let operatersEntered = []
let strings = ' '
let finalValue = ''

numbers.forEach((element) => {
    element.addEventListener('click', () => {
        displayThings(element)
        entries.push(element.innerText)
        strings += element.innerText
    }
    )
})

operators.forEach((element) => {
    element.addEventListener('click', () => {
        let data = primary.innerText
        let string = data.length
        if (operatorChecking((element.innerText), string, data) === true) {
            displayThings(element)
            numbersEntered.push(strings)
            operatersEntered.push(element.innerText)
            opeartorFunctioned.push(element.innerText)
            entries.push(element.innerText)
            strings = ' '
        }
        else {
            console.log("The operator Already Exists.")
        }
    })
})

function operatorChecking(operatorComponent, length, data) {
    for (let i = 0; i < length; i++) {
        if (data[length - 1] === opeartorRepeat[i]) {
            return false;
        }
    }
    return true
}

clear.addEventListener('click', () => {
    primary.innerText = '';
    secondary.innerText = '';
    opeartorFunctioned = []
    numbersEntered = []
    entries = []
    operatersEntered = []
    strings = ''
    console.log("All the Things are cleared.Including The array and the data.")

})

back.addEventListener("click", () => {
    let prev = primary.innerText;
    prev = prev.slice(0, -1)
    primary.innerText = prev     //    -6-9×8+9-6+8
})

function displayThings(element) {
    let value = element.innerText;
    primary.innerText += value
}

percent.addEventListener('click', () => {
    let value = primary.innerText
    primary.innerText = (value / 100)
})

equal.addEventListener('click', () => {
    let value = (primary.innerText)
    secondary.innerText = value
    numbersEntered.push(strings)
    calculate()
    primary.innerText = finalValue
    strings = ''
    numbersEntered[0] = [finalValue]
    operatersEntered = []
    entries = []
    opeartorFunctioned = []
})

function results(value) {
    console.log(value)
    return value;
}

function calculate() {
    console.log(numbersEntered)
    console.log(operatersEntered)
    
    let i = 0
    let x = operatersEntered.length
    for (i = 0; i < x; i++) {
        if (operatersEntered[i] === '÷') {
            console.log("entered in loop: ÷")
            numbersEntered[i] = parseInt(numbersEntered[i]) / parseInt(numbersEntered[i + 1])
            numbersEntered.splice(i + 1, 1)
            console.log(numbersEntered)
            console.log(numbersEntered[i])
            operatersEntered.splice(i, 1)
            console.log(operatersEntered)
            console.log(operatersEntered.length)
            i = i - 1
        }
    }

    x = operatersEntered.length

    for (i = 0; i < x; i++) {
        if (operatersEntered[i] == '×') {
            console.log("Entered in * loop")
            numbersEntered[i] = parseInt(numbersEntered[i]) * parseInt(numbersEntered[i + 1])
            console.log(numbersEntered[i])
            numbersEntered.splice(i + 1, 1)
            operatersEntered.splice(i, 1)
            i = i - 1
        }
    }

    x = operatersEntered.length

    for (i = 0; i < x; i++) {
        if (operatersEntered[i] === '+') {
            if (operatersEntered[i - 1] == '-') {
                if(numbersEntered[i] > numbersEntered[i+1]){
                    operatersEntered.splice(i-1,1,'+')
                }
                console.log(parseInt(numbersEntered[i]))
                console.log(parseInt(numbersEntered[i + 1]))
                numbersEntered[i] = parseInt(numbersEntered[i + 1]) - parseInt(numbersEntered[i])
                numbersEntered.splice(i + 1, 1)
                console.log(numbersEntered)
                operatersEntered.splice(i, 1)
                i = i - 1
                console.log(operatersEntered)
            }
            else {
                console.log("entered in loop: +")
                console.log(parseInt(numbersEntered[i]))
                console.log(parseInt(numbersEntered[i + 1]))
                numbersEntered[i] = parseInt(numbersEntered[i]) + parseInt(numbersEntered[i + 1])
                console.log(numbersEntered[i])
                numbersEntered.splice(i + 1, 1)
                console.log(numbersEntered)
                operatersEntered.splice(i, 1)
                i = i - 1
                console.log(operatersEntered)
            }
        }
    }

    x = operatersEntered.length

    for (i = 0; i < x; i++) {
        if (operatersEntered[i] === '-') {
            console.log("entered in loop: -")
            numbersEntered[i] = parseInt(numbersEntered[i]) - parseInt(numbersEntered[i + 1])
            numbersEntered.splice(i + 1, 1)
            console.log(numbersEntered)
            operatersEntered.splice(i, 1)
            i = i - 1
        }
    }

    for (i = 0; i < x; i++) {
        if (operatersEntered[i] === '+') {
            if (operatersEntered[i - 1] == '-') {
                if(numbersEntered[i] < numbersEntered[i+1]){
                    operatersEntered.splice(i-1,1,'+')
                }
                numbersEntered[i] = parseInt(numbersEntered[i + 1]) - parseInt(numbersEntered[i])
                numbersEntered.splice(i + 1, 1)
                console.log(numbersEntered)
                operatersEntered.splice(i, 1)
                i = i - 1
            }
            else {
                console.log("entered in loop: +")
                console.log(parseInt(numbersEntered[i]))
                console.log(parseInt(numbersEntered[i + 1]))
                numbersEntered[i] = parseInt(numbersEntered[i]) + parseInt(numbersEntered[i + 1])
                console.log(numbersEntered[i])
                numbersEntered.splice(i + 1, 1)
                console.log(numbersEntered)
                operatersEntered.splice(i, 1)
                i = i - 1
            }
        }
    }
    console.log(numbersEntered[0])
    finalValue = numbersEntered[0]
    console.log(finalValue)

}