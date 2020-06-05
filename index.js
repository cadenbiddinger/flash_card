var flashcards = [
  {
    prompt: "How many hours are there in a day?\n(a) 17\n\(b) 24\n(c) 248",
    answer: "b"
  },
  {
    prompt: "How many days are there in a week?\n(a) 4\n\(b) 10\n(c) 7",
    answer: "c"
  },
  {
    prompt: "How many weeks are there in a year?\n(a) 52\n\(b) 42\n(c) 378",
    answer: "a"
  },
]

for (var i=0; i < flashcards.length; i++) {
  var response = window.prompt(flashcards[i].prompt);
  if(response == flashcards[i].answer){
    score++;
    alert("Correct!")
  } else {
    alert ("Wrong!");
  }
}
alert("you got " + score + "/" + flashcards.length)

var score = 0;

// var para = document.createElement ("p");
// var node = document.createTextNode ("How many hours are there in a day?")
// flashCardQuestion.appendChild(node);

// var element = document.getElementById("");
// element.appendChild(para);
