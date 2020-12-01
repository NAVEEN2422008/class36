class Player {
    constructor(){}
  //it gives how many players inside game
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  //once player eneters, then update the player count
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  //set the nbame infront of player1, 2,3,4 in database
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }