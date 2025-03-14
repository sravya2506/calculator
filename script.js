let lastResult = null;


function appendToDisplay(value) {
    if (value === 'ans' && lastResult !== null) {
        document.getElementById('display').value += lastResult;
    } else {
        document.getElementById('display').value += value;
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function toggleSign() {
    let display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}


function calculate() {
    let display = document.getElementById('display');
    try {
    
        let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');

        
        expression = expression.replace(/%/g, '/100');

        
        expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

        
        let result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
            lastResult = result; 
        }
    } catch (e) {
        display.value = 'Error';
    }
}