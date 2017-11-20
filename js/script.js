// you can use event.preventDefault() to prevent an action if using a form and do not want to send or refresh page

var userNoun = document.querySelector('#user-input-noun');
var userAdj = document.querySelector('#user-input-adj');
var userVerb = document.querySelector('#user-input-verb');

var nounBtn = document.querySelector('#noun-btn');
var adjBtn = document.querySelector('#adj-btn');
var verbBtn = document.querySelector('#verb-btn');

nounBtn.addEventListener('click', askUser);
adjBtn.addEventListener('click', askUser2);
verbBtn.addEventListener('click', askUser3);

function askUser() {
  var user = prompt("Enter a noun please.");
  // capture user's prompt and store it as a variable
  var userWord = user;
  userWord += userNoun.value = user;
}

function askUser2() {
  var user = prompt("Enter a adjective please.");
  // capture user's prompt and store it as a variable
  var userWord = user;
  userWord += userAdj.value = user;
}

function askUser3() {
  var user = prompt("Enter a verb please.");
  // capture user's prompt and store it as a variable
  var userWord = user;
  userWord += userVerb.value = user;
}
