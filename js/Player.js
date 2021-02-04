class Player {
  constructor(){
    this.name =null;
    this.distance=0;
    this.points=0;

  }

  update(){
    var playerIndex = "player";   
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
}
