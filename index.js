let inputText = document.getElementById("input");
let convertBtn = document.getElementById("convert");
let answer= document.getElementById("answer");
let newBtn = document.getElementById("new");



convertBtn.addEventListener("click",function(){
    event.preventDefault();
    getValue();
})


// for conversion
// 1.getting input value 
function getValue(){
    // use parseFloat to convert to integer
    let inputValue = parseFloat(inputText.value); 
 console.log(inputValue);

let celcius = (inputValue  - 32) * 5/9;
//  console.log(celcius + 20);
answer.textContent = celcius;
}

newBtn.addEventListener("click",function(){
      document.getElementById("myForm").reset();
      console.log('hello')
})
