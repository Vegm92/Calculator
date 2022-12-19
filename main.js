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

    buttons.forEach(function(button){
        button.addEventListener("click", function(event){
            let value = event.target.dataset.num;
            if(value == "+" || value == "-" || value == "*" || value == "/" || value == "^"){
                let splitString = screen.value.split(value);
                splitString.forEach(function(split){
                  let splitOnDecimal = split.split(".");
                  if(splitOnDecimal.length > 2){
                    return;
                  }
                });
              }
            if(screen.value.includes(".") && value == "."){return};
            screen.value += value;
        })
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
