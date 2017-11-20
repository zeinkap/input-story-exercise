// you can use event.preventDefault() to prevent an action if using a form and do not want to send or refresh page

var userNoun = document.querySelector('#user-input-noun');
var userAdj = document.querySelector('#user-input-adj');
var userVerb = document.querySelector('#user-input-verb');
var userNum = document.querySelector('#user-input-num');

var inputBtn = document.querySelector('#input-btn');
var pContent = document.querySelector('#addContent');

inputBtn.addEventListener('click', userStory);

function userStory() {
  var userWordNoun = userNoun.value;
  var userWordAdj = userAdj.value;
  var userWordVerb = userVerb.value;
  var userWordNum = userNum.value;

  var outputMsg = "There once was a " + userWordNoun;
  outputMsg += " who was very " + userWordAdj;
  outputMsg += " who really liked to " + userWordVerb + ".";
  outputMsg += " He lived to be " + userWordNum + " years old";
  pContent.textContent = outputMsg;
}
