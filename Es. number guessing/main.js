var guessNumber = Math.floor((Math.random() * 100) + 1);
console.log(guessNumber);
var inputNumber = 0;

while(inputNumber != guessNumber){
  inputNumber = prompt("Indovina il numero:");
  console.log(inputNumber);
  if(inputNumber < guessNumber){
    alert("Inserire un numero più grande");
  }
  else if(inputNumber > guessNumber){
    alert("Inserire un numero più piccolo")
  }
}
document.write("Hai indovinato! Il numero è " + guessNumber);
