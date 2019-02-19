import 'phaser';

//load all assets here
export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    this.load.tilemapTiledJSON('mainMap', 'assets/maps/map2.json');
    this.load.spritesheet('Tileset1', 'assets/images/RPGpack_sheet.png', { 
        frameWidth: 64, 
        frameHeight: 64 
    });
    // your character
    this.load.spritesheet('Avatars', 'assets/images/roguelikeChar_transparent.png', {
        frameWidth: 17, 
        frameHeight: 17
    });

    //load bullet
    this.load.image('bullet', 'assets/images/ballBlack_04.png');
  }

  create () {
    this.scene.start('Game');
  }
};
