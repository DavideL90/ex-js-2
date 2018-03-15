var wordList = ["pasta", "gatto", "atomo", "norvegia"];
var randomChoice = Math.floor((Math.random() * wordList.length));
console.log(randomChoice);
var randomWord = wordList[randomChoice];
alert("La parola da indovinare è formata da: " + randomWord.length + " caratteri");
console.log(randomWord);
var tentativi = 0;
while((tentativi < 7) && (inputWord != randomWord)){
  var inputWord = prompt("Inserisci una parola:");
  debugger
  tentativi++;
  console.log(tentativi);
}
if((tentativi < 7) && (inputWord != randomWord)){
  document.write("Hai indovinato! La parola era: " + randomWord);
}
else{
  document.write("Hai perso! La parola era: " + randomWord);
}
