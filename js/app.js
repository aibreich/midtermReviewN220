
class ball {
    // gives the circle a set starting point
    x = 300;
    y = 100;
    // the velocity is set somewhat close to the same thing with the y being higher than the x using math.random to make the designs always different on each refresh
    velocity = { x: 4.8 - Math.random() * 1.3, y: 3.8 - Math.random() * 4.3 };
    // giving the color a random hue each reset to have it change
    color = [Math.random() * 140, Math.random() * 120, 100]

    // update function that has all the movements needed to get it to move around the screen
    update() {
        noStroke();
        fill(this.color)
        circle(this.x, this.y, 20)
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        
        // if statements that limit the ball with it being to 405 to have the ball completely cover the canvas
        if(this.y <= 0) {
            this.velocity.y *= -1;
        }
        if(this.y >= 405) {
            this.velocity.y *= -1;
        }
        if(this.x <= 0) {
            this.velocity.x *= -1;
        }
        if(this.x >= 605) {
            this.velocity.x *= -1;
        }
    }
}
// my array
let multiples = [];
// setup function with a for loop that has the amount of balls used can be scaled up
function setup() {
    createCanvas(600, 400)

    for(var i = 0; i < 4; i++) {
        multiples[i] = new ball()
    }
}
// draw function with the i set to multiples .length to determine how it moves
function draw() {

    for(var i = 0; i < multiples.length; i++) {
        multiples[i].update();
    }
   
}