'use strict';

export default class
{
    constructor(Player)
    {
        this.player    = Player;
        this.roomLight = false;
    }

    intro()
    {
        return {
            text    : 'You\'re in a small cabin. It\'s dark, and you can\'t see anything. There\'s a chest in the room, as well as a candle and some matches.',
            image   : null,
            options : {
                'open chest'   : this.openChest,
                'light candle' : this.lightCandle,
            },
        };
    }

    openChest()
    {
        console.log(this);

        this.player.playerVars.hasLighter = true;

        return {
            'text'  : 'You opened the chest and found a lighter.',
            options : {
                'light candle' : this.lightCandle,
            }
        };

    }

    lightCandle()
    {
        if (this.player.playerVars.hasLighter) {
            this.roomLight = true;
            return {
                text : 'The room is now bright. You see a door with a slide lock.'
        }
        } else {
            return {
                text : "You don't have anything to light the candle with."
            };
        }
    }
}

/*

 screen text
 image
 options // commands


 */