'use strict';

import Player from './obj/Player.js';
import Story from './obj/Story.js';
import Ch1 from './Chapters/ch1.js';

document.addEventListener('DOMContentLoaded', () => {
    const player = new Player;
    // player.loadGame();

    const story = new Story(
        document.querySelector('#input'),
        document.querySelector('#backlog'),
        document.querySelector('#image'),
    );

    story.setChapter(new Ch1(player));


// Communicate to DOM that we have JS
    document.documentElement.setAttribute('class', 'js');

    var searchFauxInput = document.querySelector('.fb-Search_FauxInput');
    var searchBox       = document.getElementById('input');

    searchBox.addEventListener('keyup', function copyInput(event) {
        searchFauxInput.textContent = searchBox.value;
        searchBox.setAttribute('value', searchBox.value);
    }, false);
});