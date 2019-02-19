import 'phaser';
import config from "./config";
import GameScene from "./views/game";
import BootScene from './views/Boot';

//main game
class Game extends Phaser.Game {
    constructor() {
        super(config);
        //load assetss
        this.scene.add('Boot', BootScene);
        //load game
        this.scene.add('Game', GameScene);
        this.scene.start('Boot');
    }
}

//main
window.game = new Game();
window.addEventListener('resize', (event) => {
    window.game.resize(window.innerWidth, window.innerHeight);
});
