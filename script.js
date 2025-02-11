function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerHTML = 'Please enter valid values.';
        return;
    }
    
    var bmi = weight / (height * height);
    var category = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        document.getElementById('result').style.color = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        document.getElementById('result').style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        document.getElementById('result').style.color = 'orange';
    } else {
        category = 'Obesity';
        document.getElementById('result').style.color = 'red';
    }
    
    document.getElementById('result').innerHTML = 'BMI: ' + bmi.toFixed(2) + ' (' + category + ')';
}