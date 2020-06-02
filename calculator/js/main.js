/**
 * * This Application is a simple calculator with awesom UI and latest JS technologies
 * ? author : Amane Mahmoud
 * ? version : 1.0
 */

//  Start the reset button
const reset = document.getElementsByClassName('clear');
const result = document.getElementsByClassName('result');
// Get buttons 
const buttons = document.getElementsByClassName('square');

reset[0].addEventListener('click', ()=> {
    result[0].children[1].textContent = '0';
});

// Operations
const operation = (operationType) => {
    return function(a, b) {
        switch (operationType) {
            case "addition":
                return a + b;
            case "substraction":
                return a - b;
            case "fraction":
                return a / b;
            case "modulo":
                return a % b;
        }
    }
}

for (const btn of buttons) {
    btn.addEventListener('click', (e) => {

        const operationName = e.target.getAttribute('data-op');

        if(operationName && operation(operationName) && operationName === "addition") {
            const add = operation(operationName);
            console.log(add(11, 15));
        }

        if(operationName && operation(operationName) && operationName === "substraction") {
            const sub = operation(operationName);
            console.log(sub(11, 15));
        }

        if(operationName && operation(operationName) && operationName === "fraction") {
            const sub = operation(operationName);
            console.log(sub(11, 15));
        }

        if(operationName && operation(operationName) && operationName === "modulo") {
            const sub = operation(operationName);
            console.log(sub(11, 15));
        }
    })
}