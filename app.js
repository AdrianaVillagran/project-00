$(document).on('ready', function() {

// check to make sure JS is loaded
    console.log('JS is loaded!');

    /*Fetch source template and compile*/
    var source = $("#player-template").html();
    var template = Handlebars.compile(source);

    /*Create player object and run through template*/
    var hotpink = new Player("The pink square", "player-one", 0, "hotpink", 48, 0);
    console.log(hotpink);
    var turquoise = new Player("The turquoise square", "player-two", 0, "turquoise", 49, 0);
    var playersArray = [hotpink, turquoise];


    var playerHTML = template({ players: playersArray });
    console.log(playerHTML);


    $('.playerEntry').append(playerHTML);

    //Function for players to drive
    hotpink.drive();
    turquoise.drive();

    hotpink.reset();
    turquoise.reset();


});

//Player object constructor function
function Player(name, id, wins, color, keyButton, initialPosition) {
  this.name = name;
  this.id = id;
  this.wins = wins;
  this.color = color;
  this.keyButton = keyButton;

  //function that moves player forward, checks for win, & updates number of player wins
  this.drive = function () {
  $(window).on('keydown', function moveRight(event) {
      var winner;
      var leftPosition = $("#" + id).offset().left - ( ( $(window).width() - $('.track').width() ) / 2 ) ;
      if (event.keyCode === keyButton) {
         $("#" + id).animate({"left": "+=10" }, 0);
            if(leftPosition >= $('.track').width() - $("#" + id).width()){
              alert(name + " wins!");
              wins++;
              console.log(wins);
            }
         }
      });
  };

  //resets player position to start a new race
  this.reset = function() {
    $(".btn").on('click', function startOver(event) {
      $("#" + id).css({left: 0});
    });

  };
}
