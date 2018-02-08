'use strict';

export default class
{
    constructor()
    {
        this.playerVars = {
            hasGun     : false,
            hasLighter : false,
            ateApple   : false, /* is extra life */
            hasCoat    : false,
            hasMap     : false,
            shoes      : false,
            extraLife  : false,

        };
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
        this.playerVars = JSON.parse(save);
    }
}