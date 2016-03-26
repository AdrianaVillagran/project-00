$(document).on('ready', function() {

// check to make sure JS is loaded
    console.log('JS is loaded!');

    /*Fetch source template and compile*/
    var source = $("#player-template").html();
    var template = Handlebars.compile(source);

    /*Create player object and run through template*/
    var playerOne = new Player("player-one", 0, "hotpink", 48);
    var playerTwo = new Player("player-two", 0, "turquoise", 49);
    var playersArray = [playerOne, playerTwo];


    var playerHTML = template({ players: playersArray });
    console.log(playerHTML);


    $('.playerEntry').append(playerHTML);

    //Function for players to drive
    playerOne.drive();
    playerTwo.drive();

});

function Player(id, wins, color, keyButton) {
  this.id = id;
  this.wins = wins;
  this.color = color;
  this.keyButton = keyButton;
  //Function below doesn't work and I don't know why
  //When I type $("#player-one") into my console it returns the correct div
  //I even tried $('h1').append('"#' + id + '"'); to make sure my string was right
  this.drive = function () {
    $(window).on('keydown', function moveRight(event) {
      if (event.keyCode === keyButton) {
        $('"#' + id + '"').animate({"left": "+=10px" }, 0);
      }
    });


  };
}
