// Back-end logic
function Player(name, turnTotal, gameTotal) {
  this.active = false;
  this.name = name;
  this.turnTotal = turnTotal;
  this.gameTotal = gameTotal;
};

  // Front-End Logis:
$("#userInput").submit(function(event) {
  event.preventDefault();

  var player1Name = $("#player1Name").val();
  var player2Name = $("#player2Name").val();
  console.log(player1Name + " " + player2Name)



  var player1 = new Player(player1Name, 0, 0)
    player1.active = true;
  var player2 = new Player(player2Name, 0, 0)
  console.log(player1);
  console.log(player2);
  $(".whoseTurn").text(player1.name)

  Player.prototype.activeSwitch = function() {
    if (player1.active === false) {
      player1.active = true
      player2.active = false
      $(".whoseTurn").text(player1.name)
    }
    else {
      player1.active = false
      player2.active = true
      $(".whoseTurn").text(player2.name)
    }
  };
  $(".gameArea").show();


  $("#roll").click(function() {
    var roll = Math.floor(Math.random() * 6) + 1;
    $(".lastNumber").text(roll)
    if (roll > 1) {
      player1.turnTotal += roll
      $("#turnTotal1").text(player1.turnTotal)
    }
    else if (roll === 1) {
      player1.activeSwitch()
      player1.turnTotal = 0
      $("#turnTotal1").text(player1.turnTotal)
      $(".sorry").text("Sorry, you rolled a '1'. Now it is the other player's turn!")
    }

    console.log(player1.active)
    console.log(player2.active)
  })
});
