// Handle form submission
document.getElementById('additionForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
  
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      document.getElementById('result').textContent = "Please enter valid numbers.";
    } else {
      const sum = firstNumber + secondNumber;
      document.getElementById('result').textContent = `Result: ${sum}`;
    }
  });
  
  // Handle dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode')
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';
  });
  