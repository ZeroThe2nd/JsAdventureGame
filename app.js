'use strict';

import Player from './obj/Player.js';
import Story from './obj/Story.js';
import Ch1 from './Chapters/ch1.js';

document.addEventListener('DOMContentLoaded', () => {
    const player = new Player;
    const story  = new Story(
        document.querySelector('#input'),
        document.querySelector('#backlog'),
        document.querySelector('#image'),
    );

    story.setChapter(new Ch1(player));

});