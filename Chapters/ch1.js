"use strict";

export default class
{
    constructor(Player)
    {
        this.Player = Player;
    }

    intro()
    {
        return {
            text    : "Intro text stuff",
            image   : "",
            options : {
                "open chest" : ()=>{alert("Opened the chest")}
            }
        };
    }

    openChest()
    {
        this.Player.playerVars.hasGun = true;

        return {
            "text"  : "",
            "image" : ""

        };

    }
}

/*

 screen text
 image
 options // commands


 */