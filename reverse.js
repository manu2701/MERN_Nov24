function reverseNumber() {
    const inputField = document.getElementById("numberInput");
    const num = parseInt(inputField.value);
    if (isNaN(num)) {
      document.getElementById("result").innerText = "Please enter a valid number.";
      return;
    }
  
    const isNegative = num < 0;
    const reversedNumber = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    const result = isNegative ? -reversedNumber : reversedNumber;
  
    document.getElementById("result").innerText = `Reversed Number: ${result}`;
  }
  