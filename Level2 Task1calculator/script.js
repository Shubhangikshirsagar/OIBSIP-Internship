let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDefaultValue() {
    if (document.getElementById('display').value === '0') {
      document.getElementById('display').value = '';
    }
  }
  