const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;

class Player{

    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.draw();
        this.position.y += this.velocity.y;
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity;
        else
            this.velocity.y = 0;

        
    }
}

const player = new Player;
player.update();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    player.update();
}
animate();

window.addEventListener('keydown', ({keyCode}) => {
    switch (keyCode){
        case 65:
            alert('left');
            break;
        case 87:
            player.velocity.y -= 20;
            break;
        case 68:
            alert('right');
            break;
        case 83:
            alert('down');
            break;
                
    }
});
