import { validateEquation, calcEquation } from './utils.js';

document.querySelector('.input-validation').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const equationInput = document.getElementById('equation');
    const errorOutput = document.querySelector('.error-output');
    const resultOutput = document.querySelector('.result');

    const equation = equationInput.value;
    const validationError = validateEquation(equation);

    if (validationError) {
        errorOutput.textContent = validationError;
        equationInput.classList.add('error');
        resultOutput.textContent = '';
    } else {
        errorOutput.textContent = '';
        equationInput.classList.remove('error');
        const result = calcEquation(equation);
        resultOutput.textContent = result ? `Результат: ${result}` : 'Ошибка вычисления';
    }
});