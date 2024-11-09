"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const ennemies = require('./json/ennemies.json');
// const bosses = require('./json/bosses.json');
var rarity_1 = require("./rarity");
function stageCheck(floor) {
    if (floor < 10) {
        var mob = (0, rarity_1.randomRarityEnnemy)();
        return mob;
    }
    else {
        var boss = (0, rarity_1.randomRarityBoss)();
        return boss;
    }
}
exports.default = stageCheck;
