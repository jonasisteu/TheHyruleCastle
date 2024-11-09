"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const player = require('./json/players.json');
var hud_1 = require("./hud");
var stageEnnemy_1 = require("./stageEnnemy");
var rarity_1 = require("./rarity");
console.clear();
// const prompt = promptSync();
function baseGame() {
    var c = require('ansi-colors');
    var floor = 1;
    var hero = (0, rarity_1.randomCharacter)();
    var mob = (0, stageEnnemy_1.default)(floor);
    var boss = (0, stageEnnemy_1.default)(10);
    var maxHeroHP = hero.hp;
    var maxMobHP = mob.hp;
    var maxBossHP = boss.hp;
    while (floor <= 10) {
        // hero.hp = maxHeroHP;
        // mob.hp = maxMobHP;
        // userInterface(hero, mob, maxHeroHP, maxMobHP, floor);
        // if (userInterface(hero, mob, maxHeroHP, maxMobHP, floor)[0] === 0) {
        //   console.log('test');
        //   break;
        // }
        // stageCheck(floor);
        // mob = stageCheck(floor);
        if (floor === 10) {
            if ((0, hud_1.default)(hero, boss, maxHeroHP, maxBossHP, floor)[1] === 0) {
                console.log("Zelda: Thanks for saving the Hyrule Kingdom, ".concat(hero.name, "."));
                console.log('');
                process.exit();
            }
            else {
                // console.log('ici');
            }
        }
        else {
            if ((0, hud_1.default)(hero, mob, maxHeroHP, maxMobHP, floor)[1] === 0) {
                // console.log('là');
                floor += 1;
                mob = (0, stageEnnemy_1.default)(floor);
                hero.hp = maxHeroHP;
                mob.hp = maxMobHP;
            }
            else {
                // console.log('ici');
            }
        }
    }
}
exports.default = baseGame;
