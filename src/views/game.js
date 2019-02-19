import "phaser";
import Player from "../sprites/player.js";

import Bullets from "../groups/bullets.js"
//game instances
class GameScene extends Phaser.Scene {
    constructor(key){
        //need to super for parent s
        super(key);
    }

    preload(){
    }

    create(){
  
        this.createMap();
        this.createPlayer();
        this.cursors = this.input.keyboard.createCursorKeys(); 

        this.addCollisions();
        this.events.on('resize', this.resize, this)
        this.cameras.main.startFollow(this.player);

        //create projectiles
        this.bullets = new Bullets(this.physics.world, this, []);
    }


    //listeners on frame change
    update() {
        this.player.update(this.cursors);
    }

    addCollisions () {
        this.physics.add.collider(this.player, this.blockedLayer);
    }

    createPlayer() {
        this.map.findObject('Player', (obj) => {
            if (obj.type === "StartPos" && obj.name === "StartPos2"){
                this.player = new Player(this, obj.x, obj.y);
            }
        });
    }       

    //resize window
    resize(width, height) {
        if (width === undefined){
            width = this.sys.game.config.width
        }
        if (height === undefined) {
            height = this.sys.game.config.height;
        }
        this.cameras.resize(width, height);
    }

    createMap(){
        this.map = this.make.tilemap({
            key: 'mainMap'
        });

        //set tiles
        this.tiles = this.map.addTilesetImage('Tileset1');
        //position the map
        this.backgroundLayer = this.map.createStaticLayer('Background', this.tiles, 0,0);
        this.blockedLayer = this.map.createStaticLayer('Collision', this.tiles, 0, 0);
        this.blockedLayer.setCollisionByExclusion([-1]);
    }
}

export default GameScene;