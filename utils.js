export function validateEquation(equation) {
    const operators = ['+', '-', '*', '/'];
    const hasOperator = operators.some(op => equation.includes(op));
    
    if (!hasOperator) {
        return 'в выражении должны использоваться только операторы +, -, /, *';
    }

    const parts = equation.split(/([+\-*/])/).map(part => part.trim()).filter(part => part);
    
    if (parts.length < 3) {
        return 'не хватает одного или нескольких операндов';
    }

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            if (isNaN(parts[i])) {
                return 'операнды могут быть только числами';
            }
        } else {
            if (!operators.includes(parts[i])) {
                return 'в выражении должны использоваться только операторы +, -, /, *';
            }
        }
    }

    return '';
}

export function calcEquation(equation) {
    const validationError = validateEquation(equation);
    if (validationError) {
        return '';
    }

    try {
        const result = eval(equation);
        return result.toString();
    } catch (error) {
        return '';
    }
}