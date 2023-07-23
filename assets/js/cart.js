function increaseFirstValue() {
    var value = parseInt(document.getElementById('first-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('first-number').value = value;
  }
  
  function decreaseFirstValue() {
    var value = parseInt(document.getElementById('first-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('first-number').value = value;
  }

  function increaseSecondValue() {
    var value = parseInt(document.getElementById('second-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('second-number').value = value;
  }
  
  function decreaseSecondValue() {
    var value = parseInt(document.getElementById('second-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('second-number').value = value;
  }

  function increaseThirdValue() {
    var value = parseInt(document.getElementById('third-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('third-number').value = value;
  }
  
  function decreaseThirdValue() {
    var value = parseInt(document.getElementById('third-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('third-number').value = value;
  }

  function removeElement() {
    var element = document.getElementById("trash-element");
    element.style.display = "none";
  }

