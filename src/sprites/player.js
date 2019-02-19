import 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'Avatars', 325);
        this.scene = scene;
        this.hitpoints = 100;
        //physics
        this.scene.physics.world.enable(this);
        //add player
        this.scene.add.existing(this);
        this.setScale(3.5);
    }


    update (cursors) {
        this.setVelocity(0);
        // check if the up or down key is pressed
        if (cursors.up.isDown) {
            this.setVelocityY(-150);
        } else if (cursors.down.isDown) {
            this.setVelocityY(150);
        }
        // check if the left or right key is pressed
        if (cursors.left.isDown) {
            this.setVelocityX(-150);
        } else if (cursors.right.isDown) {
            this.setVelocityX(150); 
        }
    }
}
export default Player;