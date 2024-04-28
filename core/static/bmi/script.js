function calculateBMI() {
  let heightValue = parseFloat(document.getElementById('height').value);
  let heightUnit = document.getElementById('height-unit').value;
  let weightValue = parseFloat(document.getElementById('weight').value);
  let weightUnit = document.getElementById('weight-unit').value;
  let gender = document.getElementById('gender').value;

  // Convert height and weight to metric units (cm and kg)
  if (heightUnit === "in") {
    heightValue *= 2.54; // Convert inches to cm
  } else if (heightUnit === "ft") {
    heightValue *= 30.48; // Convert feet to cm
  }

  if (weightUnit === "lbs") {
    weightValue *= 0.453592; // Convert pounds to kg
  }

  if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
    document.getElementById('result').innerHTML = "<span style='color: red;'>Please enter valid height and weight.</span>";
    return;
  }

  let bmi = weightValue / ((heightValue / 100) * (heightValue / 100));
  let bmiCategory = "";

  if (gender === "male") {
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  } else if (gender === "female") {
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  }

  let resultText = `Your BMI is ${bmi.toFixed(2)}, which is ${bmiCategory}.`;
  document.getElementById('result').innerHTML = resultText;
}
