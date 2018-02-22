'use strict';

export default class Ch1
{
    constructor(Player)
    {
        this.player    = Player;
        this.roomLight = false;
    }

    intro()
    {
        return {
            text    : 'Once Apon a time there was a mysterious house in the middle of the woods. Everyone knew about this house, but no one ever had the balls to go there. Out of nowhere you wake up in this house. You look around. You are in a living room. It smells like fire and old wood. You don\'t realize you are in the house. There is a chest in the room. ',
            image   : null,
            options : {
                'open chest'   : this.openChest,
                'light candle' : this.lightCandle
            }
        };
    }

    openChest()
    {
        //Console log `this` voor ontwikkeling
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
                text : 'The room is now bright. You see a door with a slide lock.',
                options : {
                'opens bag'    : this.opensBag,
                'eats apple'  : this.eatApple,
                'takes coat' : this.takesCoat,
                }
            }
        } else {
            return {
                text : "You don't have anything to light the candle with.",
                options : {
                    'opens bag'    : this.opensBag,
                    'eats apple'  : this.eatApple,
                    'takes coat' : this.takesCoat,
                }
            };
        }
    }

    opensBag()
    {
        this.player.playerVars.hasGun = true;
        let addtext = '';
        if (!this.player.playerVars.seenRoomText) {
            this.player.playerVars.seenRoomText = true;
            addtext = 'While looking around you also spotted multiply doors. Which door are you going to choose?';
        }
        return {
            text    : 'In the bag you find a handgun, gum and a bottle of water' + addtext,
            image   : null,
            options : {
                'eats apple'  : this.eatApple,
                'takes coat' : this.takesCoat,
                'kitchen'    : this.kitchen,
                'bedroom'    : this.bedroom,
                'bathroom'   : this.bathroom,
                'outside'    : this.outside

            }
        }
    }

    eatApple()
    {
        this.player.playerVars.ateApple = true;
        this.player.playerVars.extraLife++;
        let addtext = '';
        if (!this.player.playerVars.seenRoomText) {
            this.player.playerVars.seenRoomText = true;
            addtext = 'While looking around you also spotted multiply doors. Which door are you going to choose?';
        }

        return {
            text    : 'You were hungry, so you ate the apple right away. You have an extra live now.' + addtext,
            image   : null,
            options : {
                'opens bag'  : this.opensBag,
                'takes coat' : this.takesCoat,
                'kitchen'    : this.kitchen,
                'bedroom'    : this.bedroom,
                'bathroom'   : this.bathroom,
                'outside'    : this.outside

            }
        }
    }

    takesCoat()
    {
        this.player.playerVars.hasCoat = true;
        let addtext = '';
        if (!this.player.playerVars.seenRoomText) {
                this.player.playerVars.seenRoomText = true;
                addtext = 'While looking around you also spotted multiply doors. Which door are you going to choose?';
            }
        return {
            text    : 'You don’t get cold or wet, which is nice, right?' + addtext,
            image   : null,
            options : {
                'opens bag' : this.opensBag,
                'eats apple' : this.eatApple,
                'kitchen'   : this.kitchen,
                'bedroom'   : this.bedroom,
                'bathroom'  : this.bathroom,
                'outside'   : this.outside
            }
        }
    }

    /* keuze kamer */


    // Rooms() {
    //     return {
    //         text    : '',
    //         image   : null,
    //         options : {
    //             'kitchen'     : this.kitchen,
    //             'bedroom'     : this.bedroom,
    //             'bathroom'    : this.bathroom,
    //             'outside'     : this.outside
    //         }
    //     }
    // }

    kitchen()
    {
        return {
            text    : 'You see an old kitchen where nothing works. No electricity, but there is a map on the wall.',
            image   : null,
            options : {
                'checks map' : this.checksmap,
                'takes map'  : this.takesmap,
                'bedroom'    : this.bedroom,
                'bathroom'   : this.bathroom,
                'outside'    : this.outside
            }
        }
    }

    checksmap()
    {
        return {
            text    : 'Wanna go somewhere else?',
            image   : null,
            options : {
                'takes map' : this.takesmap,
                'bedroom'   : this.bedroom,
                'bathroom'  : this.bathroom,
                'outside'   : this.outside
            }
        }
    }

    takesmap()
    {

        this.player.playerVars.hasMap = true;

        return {
            text    : 'Taking the map is a good move',
            image   : null,
            options : {
                'checks map' : this.checksmap,
                'bedroom'    : this.bedroom,
                'bathroom'   : this.bathroom,
                'outside'    : this.outside
            }
        }
    }


    bedroom()
    {
        return {
            text    : 'Someone is sleeping. Next to Him you see running shoes.',
            image   : null,
            options : {
                'takes shoes' : this.shoes,
                'wake up'     : this.wakeUp,
                'bathroom'    : this.bathroom,
                'outside'     : this.outside,
                'kitchen'     : this.kitchen

            }
        }
    }

    shoes()
    {
        this.player.playerVars.shoes = true;

        return {
            text    : 'You are able to run faster now.',
            image   : null,
            options : {
                'wake up'  : this.wakeUp,
                'bathroom' : this.bathroom,
                'outside'  : this.outside,
                'kitchen'  : this.kitchen

            }
        }
    }

    wakeUp()
    {
        this.player.resetGame();

        return {
            text    : 'You woke up the person that lives here. Apparently he\'s a serial killer, he kills you in the bathroom now.'  +
            (this.player.playerVars.extraLife > 0)
                ? 'You lost an extra life'
                : '',
            image   : null,
            options : {}
        }
    }

    bathroom()
    {
        return {
            text    : 'Welcome to the dirty bathroom, all kind of things are on the wall, but the one thing you recognize is blood. You spot a little bag.',
            image   : null,
            options : {
                'open little bag' : this.openlBag,
                'bedroom'         : this.bedroom,
                'outside'         : this.outside,
                'kitchen'         : this.kitchen

            }
        }
    }

    openlBag()
    {
        this.player.playerVars.extraLife = true;

        return {
            text    : 'You found an extra life',
            image   : null,
            options : {
                'bedroom' : this.bedroom,
                'outside' : this.outside,
                'kitchen' : this.kitchen

            }
        }
    }

    outside()
    {
        return {
            text    : 'It’s cold and rainy. You look around. Nothing but trees. Where are you going?',
            image   : null,
            options : {
                'walk right'    : this.walkRight,
                'walk left'     : this.walkLeft,
                'walk straight' : this.walkStraight

            }
        }
    }


    walkRight()
    {
        return {
            text    : 'Misty, don’t get lost…. AGAIN',
            image   : null,
            options : {
                'walk left'     : this.walkLeft,
                'walk straight' : this.walkStraight

            }
        }
    }

    walkLeft()
    {
        return {
            text    : '*scary animal sounds* DO NOT RUN! If they hear you, you\'ll die.',
            image   : null,
            options : {
                'walk right'    : this.walkRight,
                'walk straight' : this.walkStraight

            }
        }
    }

    walkStraight()
    {
        return {
            text    : 'You are heard by the person inside. He\'ll hunt you, run as fast as you can..',
            image   : null,
            options : {
                'walk right' : this.walkRight,
                'walk left'  : this.walkLeft

            }
        }
    }

}


/*

 screen text
 image
 options // commands


 */