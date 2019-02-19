import "phaser";

//initial configuration, scale up games
export default {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    roundPixels: true,
    backgroundColor: 'white',
    physics: {
        default: 'arcade',
        //no gravity for top down
        arcade: {
            gravity: {y: 0}
        }
    }
}