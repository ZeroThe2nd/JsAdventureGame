'use strict';

import Player from './obj/Player.js';
import Story from './obj/Story.js';
import Ch1 from './Chapters/ch1.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
        document.getElementById('input').focus();
    });
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

    let searchFauxInput = document.querySelector('.fb-Search_FauxInput');
    let searchBox       = document.getElementById('input');

    searchBox.addEventListener('keyup', function copyInput(event) {
        searchFauxInput.textContent = searchBox.value;
        searchBox.setAttribute('value', searchBox.value);
    }, false);
});