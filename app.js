"use strict";

import Player from 'obj/Player'
import Ch1 from 'Chapters/ch1'

document.addEventListener('DOMContentLoaded', ()=>{
    const Player = new Player();
    const Chapter = new Ch1(Player);
    const Input = document.querySelector("#input")

});