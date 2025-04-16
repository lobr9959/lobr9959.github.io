const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x,y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 *Math.PI);
        ctx.fill();
    }

    update() {
        if (this.x + this.size >= width){
            this.velX = -this.velX;
        }
        else if (this.x - this.size <= 0){
            this.velX = -this.velX;
        }

        if (this.y + this.size >= height){
            this.velY = -this.velY;
        }
        else if (this.y - this.size <= 0){
            this.velY = -this.velY;
        }
        this.x += this.velX;
        this.y += this.velY;

    }

    collision() {
        for(const ball of balls) {
            if(this != ball) {
                let dx = this.x - ball.x;
                let dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + ball.size) {
                
                    const tempVelX = this.velX;
                    const tempVelY = this.velY;
            
                    this.velX = ball.velX;
                    this.velY = ball.velY;
            
                    ball.velX = tempVelX;
                    ball.velY = tempVelY;
            
                    
                    const overlap = this.size + ball.size - distance;
                    const adjustX = (dx / distance) * (overlap / 2);
                    const adjustY = (dy / distance) * (overlap / 2);
            
                    this.x += adjustX;
                    this.y += adjustY;
                    ball.x -= adjustX;
                    ball.y -= adjustY;
                }
            }
            

            
            
        }
    }
}

const balls = [];
while (balls.length < 20) {
    const size = random(10, 20);
    const ball = new Ball(random(0+size, width-size), random(0+size, height-size), random(-10, 10), random(-10, 10), randomRGB(), size);
    balls.push(ball);
}

function loop() {
    ctx.fillStyle = ("rgb(0 0 0 / 25%)");
    ctx.fillRect(0, 0, width, height);

    for(const ball of balls) {
        ball.draw();
        ball.update();
        ball.collision();
    }

    requestAnimationFrame(loop);
}

loop();