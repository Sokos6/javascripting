// input element created on index.js for demo

// Handle Events -
// By handling the keypress event, we can prevent users from entering characters
// in this case, digits and space

const ele = document.getElementById('input');

ele.addEventListener('keypress', function(e) {
  // Get the code of pressed key
  const key = e.which || e.keyCode;

  if (key != 32 && (key < 48 || key > 57)) {
    e.preventDefault();
  }
});

let currentValue = ele.value || '';

ele.addEventListenerI('input', function(e) {
  const target = e.target;

  // If users enter supported character (digits or space)
  /^[0-9\s]*$/.test(target.value)
  // Backup the current value
  ? currentValue = target.value
  // Otherwise, restore the value
  // Note that in this case, `e.preventDefault()` doesn't help
  : target.value = currentValue;
});

const selection = {};

ele.addEventListener('keydown', function(e) {
  const target = e.target;
  selection = {
    selectionStart: target.selectStart,
    selectionEnd: target.selectionEnd,
  };
});

ele.addEventListener('input', function(e) {
  const target = e.target;

  if (/^[0-9s]*$/.test(target.value)) {
      currentValue = target.value;
  } else {
      // Users enter the not supported characters
      // Restore the value and selection
      target.value = currentValue;
      target.setSelectionRange(
          selection.selectionStart,
          selection.selectionEnd
      );
  }
});
