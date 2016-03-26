$(document).on('ready', function() {

// check to make sure JS is loaded
    console.log('JS is loaded!');

    /*Fetch source template and compile*/
    var source = $("#player-template").html();
    var template = Handlebars.compile(source);

    /*Create player object and run through template*/
    var playerOne = new Player(0, "hotpink");
    var playerTwo = new Player(0, "turquoise");
    var playersArray = [playerOne, playerTwo];
    console.log(playersArray);

    var playerHTML = template({ players: playersArray });
    console.log(playerHTML);

    $('.playerEntry').append(playerHTML);


});

function Player(wins, color) {
  //this.name = name;
  this.wins = wins;
  this.color = color;
}
