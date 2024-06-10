let result = document.getElementById('result');
let expression = '';

function clearResult() {
    expression = '';
    updateResult();
}

function appendNumber(num) {
    expression += num;
    updateResult();
}

function appendOperator(operator) {
    expression += operator;
    updateResult();
}
function calculateResult() {
   try {
    let evaluated = eval(expression);
    expression = evaluated.toString();
    updateResult();
   } catch (error) {
    expression = '';
    updateResult();
    alert('Invalid expression!');
   }
}

function updateResult() {
    result.textContent = expression;
}