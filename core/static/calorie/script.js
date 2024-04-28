function calculateCalories() {
    let age = parseInt(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let gender = document.getElementById('gender').value;
    let activityLevel = document.getElementById('activity-level').value;
  
    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = "<span style='color: red;'>Please enter valid age, weight, and height.</span>";
      return;
    }
  
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    let caloriesNeeded = 0;
    switch (activityLevel) {
      case "sedentary":
        caloriesNeeded = bmr * 1.2;
        break;
      case "lightly-active":
        caloriesNeeded = bmr * 1.375;
        break;
      case "moderately-active":
        caloriesNeeded = bmr * 1.55;
        break;
      case "very-active":
        caloriesNeeded = bmr * 1.725;
        break;
      case "extra-active":
        caloriesNeeded = bmr * 1.9;
        break;
      default:
        break;
    }
  
    let resultText = `Your estimated daily calorie requirement is approximately ${caloriesNeeded.toFixed(2)} calories.`;
    document.getElementById('result').innerHTML = resultText;
  }