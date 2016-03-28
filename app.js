$(document).on('ready', function() {

// check to make sure JS is loaded
    console.log('JS is loaded!');

    /*Fetch source template and compile*/
    var source = $("#player-template").html();
    var template = Handlebars.compile(source);

    /*Create player object and run through template*/
    var pinkPlayer = new Player("Pink Player", "pink-player", 0, 0, "hotpink", 48, 0);
    var greenPlayer = new Player("Green Player", "green-player", 1, 0, "turquoise", 49, 0);
    var playersArray = [pinkPlayer, greenPlayer];

    var playerHTML = template({ players: playersArray });
    console.log(pinkPlayer.name);

    $('.playerEntry').append(playerHTML);

    //Function for players to drive
    pinkPlayer.drive();
    greenPlayer.drive();

    //Event listener for player position resets
    pinkPlayer.reset();
    greenPlayer.reset();
});

//Player object constructor function
function Player(name, id, number, wins, color, keyButton) {
  this.name = name;
  this.id = id;
  this.number = number;
  this.wins = wins;
  this.color = color;
  this.keyButton = keyButton;

  //function that moves player forward, checks for win, & updates number of player wins
  this.drive = function () {
    $(window).on('keydown', function moveRight(event) {
        var winner;
        var leftEdge = ( $(window).width() - $('.track').width() ) / 2;
        var position = $("#" + id).offset().left -  leftEdge;
        var endOfTrack = $('.track').width() - $("#" + id).width();
        if (event.keyCode === keyButton) {
           $("#" + id).animate({"left": "+=10" }, 0);
           if(position >= endOfTrack){
                alert(name + " wins!");
                wins++;
                $("#" + id).html('<h1 class="text-center">' + wins + '</h1>');

                //hide cars to display win sequence
                 $('.car').hide();
           }
        }
    });
  };

  //Resets player position to start a new race
  this.reset = function() {
    $(".btn").on('click', function startOver(event) {
      $("#" + id).css({left: 0});
      $('.car').show();
    });
  };
}
// END of Object Constructor
