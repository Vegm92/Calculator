// Immediately-Invoked Function Expression, or IIFE
(function() { 
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector('.btn-equal');
    let delfunct = document.querySelector(".btn-del");
    let squareRoot = document.querySelector(".btn-squareRoot");
    let square = document.querySelector(".btn-square");
    let operationDone = false; 

    // buttons.forEach(function(button){
    //     button.addEventListener("click", function(event){
    //         let value = event.target.dataset.num;
    //         if(screen.value.includes(".") && value == "."){return};
    //         screen.value += value;
    //     })
    // });

    buttons.forEach(function(button){
        button.addEventListener("click", function(event){
            let value = event.target.dataset.num;
     
            // check if value is a decimal point
            if (value === '.') {
                // check if screen value already contains a decimal point
                if (screen.value.indexOf('.') === -1) {
                    // if not, append the decimal point to the screen value
                    screen.value += value;
                }
            } else {
                // check if value is one of the specified operators
                let operators = ['+', '-', '/', '*', '^'];
                if (operators.indexOf(value) !== -1) {
                    // if it is an operator, split the screen value at the operator
                    let values = screen.value.split(value);
                    // operate on the values and store the result
                    let result = eval(values[0] + value + values[1]);
                    // update the screen value with the result
                    screen.value = result;
                } else {
                    // if it is not an operator or a decimal point, just append the value to the screen value
                    screen.value += value;
                }
            }
        });
    });

    equal.addEventListener("click", function() {
            let answer = eval(screen.value);
            if (answer == "Infinity"){
                return screen.value = "Error! x/0"
            }
            screen.value = answer;
            operationDone = true; 
    })

    clear.addEventListener('click', function(){
        screen.value = "";
    })

    delfunct.addEventListener('click', function() {
        let valueToDelete = screen.value.slice(0, -1)
        screen.value = valueToDelete;
    })

    squareRoot.addEventListener('click', function() {
        let value = Math.sqrt(screen.value)
        screen.value = value;
        operationDone = true; 

    })

    square.addEventListener('click', function() {
        let value = screen.value * screen.value;
        screen.value = value;
        operationDone = true; 

    })


    document.addEventListener("keydown", function (event) {   
        switch (event.key) {
            
            case "1":
                screen.value += 1;
                break;
            case "2":
                screen.value += 2;
                break;
            case "3":
                screen.value += 3;
                break;
            case "4":
                screen.value += 4;
                break;
            case "5":
                screen.value += 5;
                break;
            case "6":
                screen.value += 6;
                break;
            case "7":
                screen.value += 7;
                break;
            case "8":
                screen.value += 8;
                break;
            case "9":
                screen.value += 9;
                break;
            case "0":
                screen.value += 0;
                break;
            case "+":
                if(!screen.value.includes("+")){
                    screen.value += "+";
                }
                break;
            case "/":
                if(!screen.value.includes("/")){
                screen.value += "/"
                }
                break;
            case "*":
                if(!screen.value.includes("*")){
                screen.value += "*"
                }
                break;
            case "-":
                if(!screen.value.includes("-")){
                screen.value += "-"
                }
                break;
            case ".":
                if(!screen.value.includes(".")){
                screen.value += "."
                }
                break;
            case "Enter":
                let answer = eval(screen.value);

                if (answer == "Infinity"){
                    return screen.value = "Error! x/0"
                }
                if(screen.value === ''){
                        screen.value = "";
                   } else{
                        screen.value = answer;
                        operationDone = true; 
                    }
                break;
            case "Backspace":
                screen.value = screen.value.slice(0, -1)
                break;
            case "Delete":
                screen.value = "";
                break;
            default:
                break;
        }
    });
})();
