class Form {
  constructor() {
    
  }

  setElementsPosition() {
    
  }

 /* setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } */

  hide() {
   
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}
