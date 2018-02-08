
  // Let's start by grabbing a reference to the <span> below.

  var count, hangManWord, rightcount;
  var userInput = document.getElementById("user-Input");
  var alpha="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  var wordChar=[];
  var letterGuessed=[];
  var letterRight=[];
  var randoWord=["Helloworld", "virginia", "computer", "programming", "washington"]
  var blank= [];
  var images=
      ["url(./images/hang6.png)",
      "url(./images/hang5.png)",
      "url(./images/hang4.png)",
      "url(./images/hang3.png)",
      "url(./images/hang2.png)",
      "url(./images/hang1.png)",
    "url(./images/hang0.png)"];

function initial(){

  document.getElementById('message').style.color = 'green';
  userInput = document.getElementById("user-Input");
  count=6;
  hangManWord= randoWord[Math.floor(Math.random()*(randoWord.length))].toUpperCase();
  rightcount=0;
  wordChar=[];
  letterGuessed=[];
  letterRight=[];
  blank= [];
  document.getElementById('top').style.backgroundImage = images[count];


  document.getElementById("count").innerHTML = count;
  document.getElementById("message").innerHTML = "Welcome to the game!";
  for (var i = 0; i < hangManWord.length; i++) {
    var wordCharAdder= hangManWord.charAt(i);
    wordChar.push(wordCharAdder);
  }

  for (var i = 0; i<wordChar.length; i++){
    var underline= "___";
    blank.push(underline);
  }

  document.getElementById("blank").innerHTML = blank.join("  ");
  document.getElementById("Guessed").innerHTML = letterGuessed;

}


initial();


function fillBlank(a){
  for(var i=0; i<wordChar.length; i++){
    if(wordChar[i]==a){
      blank.splice(i, 1, a);
      rightcount+=1;
    }
  }
}


  // Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {

    userInput.textContent = event.key;
    var eventkey=event.key.toUpperCase();
    if(count>0){
      if(alpha.indexOf(event.key)>=0){
        if (wordChar.indexOf(eventkey) < 0 && letterGuessed.indexOf(eventkey)<0) {
            document.getElementById("message").innerHTML = "Please Try again";
            count-=1;
            document.getElementById("count").innerHTML = count;
            letterGuessed.push(eventkey);
            document.getElementById("Guessed").innerHTML = letterGuessed.join(" ");
            document.getElementById('top').style.backgroundImage = images[count];
        }else if(letterRight.indexOf(eventkey) >= 0||letterGuessed.indexOf(eventkey)>=0) {
                  document.getElementById("message").innerHTML = "You already guessed this letter";
        }else {
            //  display the key the user pressed (userGuess).
            document.getElementById("message").innerHTML = "good!";
            letterRight.push(eventkey);
            fillBlank(eventkey);
            document.getElementById("blank").innerHTML = blank.join("  ");
              //  display the key the Computer guessed.
        }
      }
    }
  if(count===0){
    document.getElementById("message").innerHTML = "You Lost!!!";
    document.getElementById('message').style.color = 'red';
    }
  if(rightcount>=wordChar.length){
    document.getElementById("message").innerHTML = "You Won!!!";
    return;
    }
  if(count<-1){
      initial()
    }
  };
