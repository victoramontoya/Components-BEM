class Block {
  contructor(element) {
    this.element = element;
    
    this.element.addEventListener("click", () => {
      this.element.classList.add("Box--dropdown");
    });
  }
}

let blocks = document.getElementsByClassName("Block");
blocks = Array.from(blocks).map(block => { return new Block(block)
});


class dropdown {
    constructor(element) {
        this.element = element;
        
        this.element.addEventListener('click', ())
    }
}

var x = document.createElement("MENU");


