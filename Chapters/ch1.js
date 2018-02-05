"use strict";

export default class {
    constructor (Player){
        this.Player = Player;
        const text = "Intro text stuff";
        const options = {
            "open chest" : this.openChest
        };
        const image = "";
    }

    openChest (){
        this.Player.playerVars.hasGun = true;

        return {
            'text' : "",
            'image' : '',

        };

    }
}

/*

    screen text
    image
    options // commands


*/