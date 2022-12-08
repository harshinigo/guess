let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let score = 10;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

btn.addEventListener("click", function () {
  let input = Number(document.getElementById("userInput").value);
  if (!input) {
    output.innerHTML = "⛔ No number";
  } else if (input < number) {
    if (score > 1) {
      output.innerHTML = "⏬ You guessed too low!";
      score--;
      document.getElementById("score").innerHTML = "Score: " + score;
    } else {
      score = 0;
      output.innerHTML = "😓 You lost the game";
    }
  } else if (input > number) {
    if (score > 1) {
      output.innerHTML = "⏫ You guessed too high!";
      score--;
      document.getElementById("score").innerHTML = "Score: " + score;
    } else {
      score = 0;
      output.innerHTML = "😓 You lost the game";
    }
  } else if (input === number) {
    output.innerHTML = `🙌 You guessed it right!`;
    document.getElementById("number").style.cssText = `
    display: block; 
    color: 'green';
    font-size:65px;
  `;
    document.getElementById("number").textContent = `${number}`;
    document.getElementById("happyFace").innerHTML = "🥳 happy!";
    document.getElementById("score").innerHTML = "Score: " + score;
    $(document).ready(function () {
      for (var i = 0; i < 550; i++) {
        create(i);
      }
      function create(i) {
        var width = Math.random() * 10;
        var height = width * 0.4;
        var colourIdx = Math.ceil(Math.random() * 3);
        var colour = "red";
        switch (colourIdx) {
          case 1:
            colour = "yellow";
            break;
          case 2:
            colour = "blue";
            break;
          default:
            colour = "red";
        }
        $('<div class="confetti-' + i + " " + colour + '"></div>')
          .css({
            width: width + "px",
            height: height + "px",
            top: -Math.random() * 20 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() + 0.5,
            transform: "rotate(" + Math.random() * 360 + "deg)",
          })
          .appendTo(".wrapper");

        drop(i);
      }

      function drop(x) {
        $(".confetti-" + x).animate(
          {
            top: "100%",
            left: "+=" + Math.random() * 15 + "%",
          },
          Math.random() * 2000 + 2000,
          function () {
            reset(x);
          }
        );
      }

      function reset(x) {
        $(".confetti-" + x).animate(
          {
            top: -Math.random() * 20 + "%",
            left: "-=" + Math.random() * 15 + "%",
          },
          0,
          function () {
            drop(x);
          }
        );
      }
    });
  }
});
