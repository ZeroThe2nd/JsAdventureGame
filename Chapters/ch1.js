"use strict";

export default class
{
    constructor(Player)
    {
        this.player = Player;
    }

    intro()
    {
        return {
            text    : "Intro text stuff",
            image   : null,
            options : {
                "open chest" : this.openChest
            }
        };
    }

    openChest()
    {
        console.log(this);

//        this.player.playerVars.hasGun = true;

        return {
            "text"  : "You opened the chest",
            "image" : null

        };

    }
}

/*

 screen text
 image
 options // commands


 */