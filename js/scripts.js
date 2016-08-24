// Back-end logic
$("#userInput").submit(function(event) {
  event.preventDefault();

  var player1Name = $("#player1Name").val();
  var player2Name = $("#player2Name").val();
  console.log(player1Name + " " + player2Name)

  function Player(name, turnTotal, gameTotal) {
    this.name = name;
    this.turnTotal = turnTotal;
    this.gameTotal = gameTotal;
  }

  var player1 = new Player(player1Name, 0, 0)
  var player2 = new Player(player2Name, 0, 0)
  console.log(player1);
  console.log(player2);

  $(".gameArea").show();

  $("#roll1").click(function() {
    var roll = Math.floor(Math.random() * 6) + 1;
    $(".lastNumber").text(roll)
    if (roll > 1) {
      player1.turnTotal += roll
      $("#turnTotal1").text(player1.turnTotal)
    }
    else if (roll === 1) {
      player1.turnTotal = 0
      $("#turnTotal1").text(player1.turnTotal)
      $(".sorry").text("Sorry, you rolled a '1'. Now it is the other player's turn!")
    }


  })
})
