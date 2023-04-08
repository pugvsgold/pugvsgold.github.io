import Level from "./Level.js";
import Hero from "../../js/classes/Hero.js";

class Game {
    constructor(rendererThree, sounds, width, height) {
        this.rendererThree = rendererThree;
        this.sounds = sounds;
        this.updateWidthHeight(width, height);
        this.levelNumber = 1;
        this.levelChangeTime = (new Date()).getTime();
        this.hero = new Hero(-75, 0);
        this.level = new Level(this, this.rendererThree, this.sounds);
        this.score = 0;
    }

    render(fpsAdjustment) {
        if (this.level.hasWon()) {
            this.levelNumber++;
            this.levelChangeTime = (new Date()).getTime();
            this.level = new Level(this, this.rendererThree, this.sounds);
            this.hero.stopShooting();
            this.hero.stopTurning();
            this.hero.stop();
        }
            this.level.render(fpsAdjustment);

    }

    isOver() {
        return this.hero.hitPoints <= 0
    }

    updateWidthHeight(width, height) {
        this.width = width;
        this.height = height; // - 50; // possible ad space
    }
}

export default Game;