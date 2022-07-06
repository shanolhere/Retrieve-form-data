const text = document.querySelector(".textbox");
const icecream = document.querySelector(".icecream");
var radios = document.getElementsByName("radio");

const result = document.querySelector(".result");
const resultcheck = document.querySelector(".resultcheck");

const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", () => {
  const textValue = text.value;
  const icecreamValue = icecream.value;

  var radio_value;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radio_value = radios[i].value;
    }
  }

  var checkboxes = document.querySelectorAll('input[name="check"]:checked');
  var check_value = [];
  checkboxes.forEach((checkbox) => {
    console.log("clcked");
    check_value.push(checkbox.value);
  });

  result.innerHTML = `${textValue} selected ${icecreamValue} with ${radio_value}`;
  resultcheck.innerHTML = `${check_value}`;
});
