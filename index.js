var seq = [];
var seq_entered = [];
var level = 0;

function seq_gen() {
  var new_num = Math.floor(Math.random() * 4) + 1;
  seq.push(new_num);
  $("h1").text("Level " + (level+1));
  level=0;
  seq_entered=[];
  noise(String(new_num));
     $("." + new_num).fadeOut(500).fadeIn(500);
}

$(".btn").click(function() {
    var colour= $(this).attr("id");
    seq_entered.push(colour);
    if (seq_entered[level]===String(seq[level]))
    {
      $(colour).fadeOut(300).fadeIn(300);
      noise(colour);
      animatePress(colour)
      level++;
      if(level===seq.length)
      setTimeout(seq_gen(),2000);
    }
    else
    {
      noise("5");
      $("body").addClass("game-over");
      $("h1").text("Game Over\n press A to start again");
      new_game();
    }
  });

  function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
      $("." + currentColor).removeClass("pressed");
    }, 100);
  }



$(document).keydown(function(event) {
  if ((event.key === "a" || event.key === "A")) {
    $("h1").text("Level " + (level+1));
    $("body").removeClass("game-over");
    seq_gen();
  }
});


  function noise(box) {
    console.log(box);
    var audio;
    switch (box) {
      case "1":
        audio = new Audio("sounds/red.mp3");
        audio.play();
        break;
      case "2":
        audio = new Audio("sounds/red.mp3");
        audio.play();
        break;
      case "3":
        audio = new Audio("sounds/yellow.mp3");
        audio.play();
        break;
      case "4":
        audio = new Audio("sounds/blue.mp3");
        audio.play();
        break;
      case "5":
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        break;
      default:
        console.log("Unexpected Error");
    }
  }

function new_game(){
  seq=[];
  seq_entered=[];
  level=0;
}
