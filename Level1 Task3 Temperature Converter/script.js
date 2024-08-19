// script.js
document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('resultDisplay');
    
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDisplay.innerHTML = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unitSelect) {
        case 'celsius':
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            break;
        case 'kelvin':
            convertedTemperature = temperature + 273.15;
            convertedUnit = 'Kelvin';
            break;
        default:
            resultDisplay.innerHTML = "Invalid conversion!";
            return;
    }

    resultDisplay.innerHTML = `${convertedTemperature.toFixed(2)} °${convertedUnit}`;
});
