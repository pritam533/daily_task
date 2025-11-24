let display = document.getElementById("display");
let prev = document.getElementById("prev-history");

function press(val) {
      if (display.value === "0") {
            display.value = val;
      } else {
            display.value += val;
      }
}

function clearEntry() {
      display.value = "0";
}

function calculator () {
      try {
            let result = eval(display.value);
            prev.innerText = result;
            display.value = result;
      } catch {
            display.value = "Error";
      }
}

