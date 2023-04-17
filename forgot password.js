function addListener(input) {
    input.addEventListener("keyup", () => {
      const code = parseInt(input.value);
      if (code >= 0 && code <= 9) {
        const n = input.nextElementSibling;
        if (n) n.focus();
      } else {
        input.value = "";
      }
  
      const key = event.key; // const {key} = event; ES6+
      if (key === "Backspace" || key === "Delete") {
        const prev = input.previousElementSibling;
        if (prev) prev.focus();
      }
    });
  }