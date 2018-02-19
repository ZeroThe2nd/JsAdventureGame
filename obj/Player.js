'use strict';

export default class Player
{
    constructor()
    {
        this.default = {
            hasGun     : false,
            hasLighter : false,
            ateApple   : false, /* is an extra life */
            hasCoat    : false,
            hasMap     : false,
            shoes      : false,
            extraLife  : false,
            seenRoomText : false,
        };

        this.playerVars = this.default;
    }

    saveGame()
    {
        localStorage.setItem(
            'SAVE',
            JSON.stringify(this.playerVars),
        );
    }

    loadGame()
    {
        let save        = localStorage.getItem(
            'SAVE',
        );
        this.playerVars = Object.assign(
            this.playerVars,
            JSON.parse(save)
        );
    }

    resetGame() {
        this.playerVars = this.default;
    }

}