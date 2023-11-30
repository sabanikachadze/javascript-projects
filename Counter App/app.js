// const decreaseButton = document.querySelector('.decrease');
// const resetButton = document.querySelector('.reset');
// const increaseButton = document.querySelector('.increase');
// const value = document.getElementById("value");

// let count = 0;
// value.innerHTML = count;

// decreaseButton.addEventListener('click', function(){
//   count--;
//   value.innerHTML = count; // Update the displayed value
// });

// resetButton.addEventListener('click', function(){
//   count = 0;
//   value.innerHTML = count; // Update the displayed value
// });

// increaseButton.addEventListener('click', function(){
//   count++;
//   value.innerHTML = count; // Update the displayed value
// });
let count = 0 ; 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
     if(styles.contains('decrease')){
      count--;
     }else if(styles.contains('reset')){
      count = 0;
     }else{
      count++
     }
     value.textContent = count
  })
});