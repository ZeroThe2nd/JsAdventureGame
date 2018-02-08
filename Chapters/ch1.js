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
            text    : 'Once Apon a time there was a mysterious house in the middle of the woods. Everyone knew about this house, but no one ever had the balls to go there. Out of nowhere you wake up in this house. You look around. You are in a living room. It smells like fire and old wood. You don\\’t realize you are in the house. There is a chest in the room. ',
            image   : null,
            options : {
                'open chest'   : this.openChest,
                'light candle' : this.lightCandle
            }
        };
    }

    openChest()
    {
        console.log(this);

        this.player.playerVars.hasLighter = true;

        return {
            'text'  : 'You opened the chest and found a lighter. You see more items in the room. A bag, an apple, but also a warm coat. What\'s your choice? ',
            options : {
                'light candle' : this.lightCandle,
                'opens bag'    : this.opensBag,
                'eats apple'   : this.eatApple,
                'takes coat'   : this.takesCoat
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

    opensBag() {
        return {
            text    : 'In the bag you find a handgun, gum and a bottle of water',
            image   : null,
            options : {
                'eat apple'     : this.eatApple,
                'takes coat'    : this.takesCoat

            }
        }
    }

    eatApple() {
        return {
            text    : 'You were hungry, so you ate the apple right away. You have an extra live now.',
            image   : null,
            options : {
                'opens bag'     : this.opensBag,
                'takes coat'    : this.takesCoat

            }
        }
    }

    takesCoat() {
        return {
            text    : 'You don’t get cold or wet, which is nice, right?',
            image   : null,
            options : {
                'opens bag'     : this.opensBag,
                'eat apple'     : this.eatApple

            }
        }
    }
}



/*

 screen text
 image
 options // commands


 */