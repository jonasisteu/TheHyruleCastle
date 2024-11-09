"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const ennemies = require('./json/ennemies.json');
var rarity_1 = require("./rarity");
function stageCheck(floor, maxFloor) {
    var lastStage = 0;
    if (maxFloor === '10') {
        lastStage = 10;
    }
    else if (maxFloor === '20') {
        lastStage = 20;
    }
    else if (maxFloor === '50') {
        lastStage = 50;
    }
    else if (maxFloor === '100') {
        lastStage = 100;
    }
    if (floor < lastStage && floor !== 10 && floor !== 20 && floor !== 50 && floor !== 10) {
        var mob = (0, rarity_1.randomRarityEnnemy)();
        return mob;
    }
    else {
        var boss = (0, rarity_1.randomRarityBoss)();
        return boss;
    }
}
exports.default = stageCheck;
