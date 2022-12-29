//Turns the body a white color when the light theme button is clicked
const lightTheme = document.getElementById('button1');
      lightTheme.addEventListener('click', () => {
        document.body.style.backgroundColor = "#ffffff";
      });


//Turns the body a black color when the dark theme button is clicked
const darkTheme = document.getElementById('button2');
      darkTheme.addEventListener('click', () => {
        document.body.style.backgroundColor = "#000000";
      });


//Swaps between white and black color when the swap button is clicked
const swap = document.getElementById("button3")
let color = "#ffffff"
      swap.addEventListener('click', function() {
        if (color === '#ffffff') {
          color = '#000000';
        } else {
          color = '#ffffff';
        }
        document.body.style.backgroundColor = color;
      });





