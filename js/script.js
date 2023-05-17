// Get the radio buttons and the target element
const radioButtons = document.querySelectorAll('input[name="myRadio"]');
const myElement = document.getElementById('intWrap');
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value2")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  const progress = (tempSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #00B2E3 ${progress}%, #ccc ${progress}%)`;
})



// Add event listener to each radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    if (this.checked) {
      myElement.classList.toggle('warm');
    //   mySlider.classList.toggle('warm');
    }
  });
});

var range = document.querySelector("#range");
var form = document.querySelector("#form");

range.addEventListener("input", function() {
  form.style["opacity"] = this.value ;
});
