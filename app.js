$(document).on('ready', function() {

// check to make sure JS is loaded
    console.log('JS is loaded!');

    /*Fetch source template and compile*/
    var source = $("#player-template").html();
    var template = Handlebars.compile(source);

    /*Create player object and run through template*/
    var playerOne = new Player("player-one", 0, "hotpink", 48, 0);
    var playerTwo = new Player("player-two", 0, "turquoise", 49, 0);
    var playersArray = [playerOne, playerTwo];


    var playerHTML = template({ players: playersArray });
    console.log(playerHTML);


    $('.playerEntry').append(playerHTML);

    //Function for players to drive
    playerOne.drive();
    playerTwo.drive();

    playerOne.reset();
    playerTwo.reset();




});

function Player(id, wins, color, keyButton, initialPosition) {
  this.id = id;
  this.wins = wins;
  this.color = color;
  this.keyButton = keyButton;
  this.initialPosition = initialPosition;
  this.setNewPosition = function() {
    console.log("hi");
  };
    // var position = $("#" + id).position();
    // var percentLeft = Math.floor(position.left/$(window).width() * 100);
    // if (percentLeft === 85) {
    //   alert("You won!");


  this.drive = function () {

    $(window).on('keydown', function moveRight(event) {
      var leftPosition = $("#" + id).offset().left;
      if (event.keyCode === keyButton) {
         $("#" + id).animate({"left": "+=10" }, 0, "linear", checkForWinner() );
         }
      });
  };

  this.reset = function() {
    $(window).on('click', function startOver(event) {
      $("#" + id).css({left: 0});
    });

  };
}



function checkForWinner() {
  var $playerOne = $("#player-one");
  var playerOnePosition = $playerOne.offset().left - ( ( $(window).width() - $('.track').width() ) / 2 );
  var $playerTwo = $("#player-two");
  var playerTwoPosition = $playerTwo.offset().left - ( ( $(window).width() - $('.track').width() ) / 2 );

  if (playerOnePosition  >= $('.track').width() - $playerOne.width()) {
   alert("Player One Wins");
 } else if (playerTwoPosition  >= $('.track').width() - $playerTwo.width()) {
   alert("Player Two Wins");
 }

}
