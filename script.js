let value1 = "";
let value2 = "";
let globalSign = "";
let valueReset = false;

const calc = document.querySelector('.calculator');
const valueConst = document.querySelector('.value');
const clear = document.querySelector('.clearButton');

clear.addEventListener('click', () => {
    value1 = "";
    value2 = "";
    globalSign = "";
    valueReset = false;
    valueConst.textContent = "0";
});

document.addEventListener('click', e => {
    
    setTimeout(() => {
        e.target.style = "background-color:  rgb(36, 35, 35);"
    }, 100);

    e.target.style = "background-color: rgb(66, 65, 65)"

   
});

document.addEventListener('keydown', e => {
    if (e.key == 'Backspace')
    {
        valueConst.textContent = valueConst.textContent.slice(0, valueConst.textContent.length - 1);
    }

    switch(e.key){
        case "0":
            input(0);
            break;
        case "1": 
            input(1);
            break;
        case "2":
            input(2);
            break;
        case "3":
            input(3);
            break;
        case "4": 
            input(4);
            break;
        case "5": 
            input(5);
            break;
        case "6": 
            input(6);
            break;
        case "7": 
            input(7);
            break;
        case "8": 
            input(8);
            break;
        case "9": 
            input(9);
            break;
        case ".":
            input(".");
            break;
        case "+":
            operation(valueConst.textContent, "+")
            break;
        case "-":
            operation(valueConst.textContent, '-')
            break;
        case "*":
            operation(valueConst.textContent, '*')
            break;
        case "/":
            operation(valueConst.textContent, '/')
            break;    
        case "Enter":
            operation(valueConst.textContent, '=')
            break;      
    }
})


function input(number){
    if (valueReset == true)
    {
        valueConst.textContent = "";
        valueReset = false;
    }

    if (valueConst.textContent[0] == "0" && valueConst.textContent.length == 1)
    {
        if (number == ".")
        {
            let dotFound = false;

            for (let x = 0; x < valueConst.textContent.length; ++x)
            {
                if (valueConst.textContent[x] == ".")
                    dotFound = true;
            }

            if (dotFound == false)
                valueConst.textContent = valueConst.textContent + number;
        }
        else
            valueConst.textContent = number;
    }
    else
    {
        if (number == ".")
        {
            let dotFound = false;

            for (let x = 0; x < valueConst.textContent.length; ++x)
            {
                if (valueConst.textContent[x] == ".")
                    dotFound = true;
            }

            if (dotFound == false)
                valueConst.textContent = valueConst.textContent + number;
        } 
        else
            valueConst.textContent = valueConst.textContent + number;
    }
        
}

function add(a, b){
    result = a + b;
    value2 = "";
    return result;
};

function subtract(a, b){
    result = a - b;
    value2 = "";
    return result;
};

function multiply(a, b){
    result = a * b;
    value2 = "";
    return result;
};

function divide(a, b){
    if (b == 0)
    {
        return "Error detected. Sorry loser!";
    }
    
    result = a / b;
    value2 = "";
    return result;
};

function operation(value, sign){

    console.log("IT's working!")
    valueConst.textContent = "";
    console.log(value);
    if (value1 == "")
    {
        value1 = value;
        globalSign = sign;
       
    }

    

    else if (value2 == "")
    {

        value2 = value;

        if (globalSign == '+'){
            value1 = add(Number(value1), Number(value2));
            globalSign = sign;
        }
        
        else if (globalSign == '-')
        {
            value1 = subtract(Number(value1), Number(value2));
            globalSign = sign;
        }
        
        else if (globalSign == '*')
        {
            value1 = multiply(Number(value1), Number(value2));
            globalSign = sign;
        }
        
        else if (globalSign == '/')
        {
            value1 = divide(Number(value1), Number(value2));
            globalSign = sign;
        }

        value2 = "";
        valueConst.textContent = value1;
        valueReset = true;
    }

     //Before the if statement, place the output for value 1 here
        
     if (globalSign == "=")
     {
        valueConst.textContent = value1;
        value1 = "";
        valueReset = true;
     }
        
    
    return 0;
};