class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Play");
  }

  display(){
    var title = createElement('h1')
    title.html("Jet Racing Game");
    title.position(displayWidth/2-70,0);
    
   
    
    this.input.position(displayWidth/2-70,160);
    this.button.position(displayWidth/2+50,200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      player.name=this.input.value();
      player.update();
     // game.update(1);
        
        });

  }
}
