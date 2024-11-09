"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_game_customization_1 = require("./mods/basic_game_customization");
var baseGame_1 = require("./baseGame");
try {
    (0, baseGame_1.default)((0, basic_game_customization_1.titleScreen)());
}
catch (_a) {
    console.log('\nYou left the game.\n');
}
