import 'phaser';

class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children){
        super(world, scene, children);
        this.scene = scene;
        this.createMultiple({
            frameQuantity: 5,
            key: 'bullet',
            active: false,
            visible: false
        })
    }

    fireBullet(x,y){
        const bullet = this.getFirstDead(false);
        if(bullet){
            bullet.enableBody(true);
            bullet.active = true;
            bullet.visible = true;
            bullet.setPosition(x, y);
        }
    }
}