var wordList = ["pasta", "gatto", "atomo", "norvegia"];
var randomChoice = Math.floor((Math.random() * wordList.length));
var randomWord = wordList[randomChoice];
console.log(randomWord);
var tentativi = 0;
alert("La parola da indovinare è formata da: " + randomWord.length + " caratteri");
while((tentativi < 7) && (inputWord != randomWord)){
  var inputWord = prompt("Inserisci una parola:");
  tentativi++;
  if(tentativi % 2 == 0){
    var randomLetter = randomWord.charAt((Math.floor((Math.random() * randomWord.length))));
    alert("Suggerimento! " + randomLetter);
  }
  console.log(tentativi);
}
if((tentativi < 7) || (inputWord == randomWord)){
  document.write("Hai indovinato! La parola era: " + randomWord);
}
else{
  document.write("Hai perso! La parola era: " + randomWord);
}
