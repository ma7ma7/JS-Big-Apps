/**
 * * This Application is a simple calculator with awesom UI and latest JS technologies
 * ? author : Amane Mahmoud
 * ? version : 1.0
 */

//  Start the reset button
const reset = document.getElementsByClassName('clear');
const result = document.getElementsByClassName('result');

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
        }
    }
}

const add = operation("addition");
console.log(add(11, 15));

const sub = operation("substraction");
console.log(sub(11, 15));