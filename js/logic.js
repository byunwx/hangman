
  // Let's start by grabbing a reference to the <span> below.
  var music = document.getElementById('music');

  function playAudio() {
  	if (music.paused) {
  		music.play();
  		pButton.className = "glyphicon glyphicon-pause";
  		pButton.className = "pause";
  	} else {
  		music.pause();
  		pButton.className = "glyphicon glyphicon-play";
  		pButton.className = "play";
  	}
  }
  var count, hangManWord, rightcount, hint;
  var userInput = document.getElementById("user-Input");
  var alpha="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  var wordChar=[];
  var letterGuessed=[];
  var letterRight=[];
  var randoWord=["Helloworld", "virginia", "computer", "programming", "washington", "cat", 
    "wholefood", "wegmans", "lemon", "wedding", "ring", "youtube", "apple", "banana", "cherry", 
    "dolphin", "elephant", "guitar", "harmony", "island", 
    "jungle", "koala", "lemon", "mountain", "notebook", "orange", "piano", "quilt", "rocket",
    "snowman", "tiger", "umbrella", "vampire", "whistle", "xylophone", "yellow", "zebra", 
    "bicycle", "camera", "diamond", "echo", "flamingo", "giraffe", "hippopotamus", "iguana", 
    "jigsaw", "kangaroo", "lighthouse", "moon", "november", "octopus", "puzzle", "queen", 
    "rainbow", "sunflower", "treehouse", "unicorn", "vortex", "walnut", "xenon", "yacht",
    "zombie", "avocado", "bison", "climate", "dazzle", "energy"];
  const hangmanWords = [
    { word: "helloworld", hint: "A common programming greeting" },
    { word: "virginia", hint: "A U.S. state, home to the capital" },
    { word: "computer", hint: "A machine we use for work and play" },
    { word: "programming", hint: "Writing code to make things work" },
    { word: "washington", hint: "U.S. capital and state" },
    { word: "cat", hint: "A popular pet, known for purring" },
    { word: "wholefood", hint: "Natural and unprocessed food" },
    { word: "wegmans", hint: "A popular grocery store chain" },
    { word: "lemon", hint: "A sour yellow fruit" },
    { word: "wedding", hint: "A celebration of marriage" },
    { word: "ring", hint: "A circular piece of jewelry" },
    { word: "youtube", hint: "A platform for sharing videos" },
    { word: "apple", hint: "A popular fruit and tech company" },
    { word: "banana", hint: "A long yellow fruit" },
    { word: "cherry", hint: "A small red fruit often used in desserts" },
    { word: "dolphin", hint: "A smart sea mammal" },
    { word: "elephant", hint: "A large, grey land mammal with big ears" },
    { word: "guitar", hint: "A string instrument used in many music genres" },
    { word: "harmony", hint: "Musical notes that sound good together" },
    { word: "island", hint: "A piece of land surrounded by water" },
    { word: "jungle", hint: "A dense tropical forest" },
    { word: "koala", hint: "A tree-dwelling marsupial from Australia" },
    { word: "mountain", hint: "A large natural elevation of the Earth's surface" },
    { word: "notebook", hint: "A place to write down thoughts and ideas" },
    { word: "orange", hint: "A citrus fruit that's also a color" },
    { word: "piano", hint: "A large musical instrument with black and white keys" },
    { word: "quilt", hint: "A multi-layered blanket often made of fabric patches" },
    { word: "rocket", hint: "A vehicle designed to travel in space" },
    { word: "snowman", hint: "A figure made of snow, often with a carrot nose" },
    { word: "tiger", hint: "A big cat with orange fur and black stripes" },
    { word: "umbrella", hint: "A portable item used for protection from rain" },
    { word: "vampire", hint: "A mythical creature that drinks blood" },
    { word: "whistle", hint: "A high-pitched sound made by blowing air through pursed lips" },
    { word: "xylophone", hint: "A musical instrument made of wooden bars" },
    { word: "yellow", hint: "A bright color, often associated with sunshine" },
    { word: "zebra", hint: "An African animal with black and white stripes" },
    { word: "bicycle", hint: "A two-wheeled vehicle powered by pedaling" },
    { word: "camera", hint: "A device used to take photographs" },
    { word: "diamond", hint: "A precious gemstone, often used in jewelry" },
    { word: "echo", hint: "A reflected sound" },
    { word: "flamingo", hint: "A pink wading bird with long legs" },
    { word: "giraffe", hint: "The tallest land animal with a long neck" },
    { word: "hippopotamus", hint: "A large, mostly herbivorous mammal found in rivers" },
    { word: "iguana", hint: "A large lizard native to Central and South America" },
    { word: "jigsaw", hint: "A puzzle where you fit pieces together" },
    { word: "kangaroo", hint: "A marsupial that hops and carries its babies in a pouch" },
    { word: "lighthouse", hint: "A tower used to guide ships at sea" },
    { word: "moon", hint: "Earth's natural satellite" },
    { word: "november", hint: "The eleventh month of the year" },
    { word: "octopus", hint: "A sea creature with eight arms" },
    { word: "puzzle", hint: "A game or problem that requires solving" },
    { word: "queen", hint: "A female ruler of a country or a chess piece" },
    { word: "rainbow", hint: "A spectrum of light that appears after rain" },
    { word: "sunflower", hint: "A tall, yellow flower that faces the sun" },
    { word: "treehouse", hint: "A small house built in a tree" },
    { word: "unicorn", hint: "A mythical horse-like creature with a single horn" },
    { word: "vortex", hint: "A powerful circular motion of water or air" },
    { word: "walnut", hint: "A type of tree nut with a hard shell" },
    { word: "xenon", hint: "A rare, colorless, and odorless gas" },
    { word: "yacht", hint: "A luxury boat often used for recreation" },
    { word: "zombie", hint: "A reanimated corpse from horror fiction" },
    { word: "avocado", hint: "A creamy fruit often used in guacamole" },
    { word: "bison", hint: "A large herbivorous mammal native to North America" },
    { word: "climate", hint: "The long-term weather conditions of a region" },
    { word: "dazzle", hint: "To amaze or impress with brilliant or showy qualities" },
    { word: "energy", hint: "The capacity to do work or produce change" }
  ];
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
  let randomizer = Math.floor(Math.random()*(randoWord.length));
  hangManWord= hangmanWords[randomizer].word.toUpperCase();
  hint = hangmanWords[randomizer].hint;
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
      if(count === 1) {
        document.getElementById("message").innerHTML = hint;
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
