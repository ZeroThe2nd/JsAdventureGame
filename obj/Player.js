'use strict';

export default class
{
    constructor()
    {
        this.playerVars = {
            hasGun     : false,
            hasLighter : false,
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