"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const player = require('./json/players.json');
var hud_1 = require("./hud");
var stageEnnemy_1 = require("./stageEnnemy");
var rarity_1 = require("./rarity");
var basic_game_customization_1 = require("./mods/basic_game_customization");
var level_and_experience_1 = require("./mods/level_and_experience");
var icons_1 = require("./icons");
console.clear();
// const prompt = promptSync();
function baseGame(titleScreen) {
    var prompt = require('prompt-sync')();
    var c = require('ansi-colors');
    var floor = 1;
    var hero = (0, rarity_1.randomCharacter)();
    var mob = (0, basic_game_customization_1.diffEnnemy)((0, stageEnnemy_1.default)(floor, titleScreen[1]), titleScreen[0]);
    var boss = (0, basic_game_customization_1.diffEnnemy)((0, stageEnnemy_1.default)(10, titleScreen[1]), titleScreen[0]);
    var level = 1;
    var xp = 0;
    var maxXP = 60;
    var coins = 12;
    var lastStage = 0;
    var bossCheck;
    if (titleScreen[1] === '10') {
        lastStage = 10;
    }
    else if (titleScreen[1] === '20') {
        lastStage = 20;
    }
    else if (titleScreen[1] === '50') {
        lastStage = 50;
    }
    else if (titleScreen[1] === '100') {
        lastStage = 100;
    }
    var maxHeroHP = hero.hp;
    var maxMobHP = mob.hp;
    var maxBossHP = boss.hp;
    console.clear();
    prompt("You are a mighty warrior running by the name of ".concat(hero.name, "."));
    prompt('The Hyrule Kingdom needs you! It\'s most important place being the Hyrule Castle, it is filled by vicious creatures.');
    prompt("Problem is, the world fell down one day to another, leaving no clue of the author of this.");
    (0, icons_1.default)('Ganon');
    prompt("\bIt could be Ganon, the dark lord, but you can't be sure of it.");
    prompt("\nThe best way to find that out is to face them all.");
    prompt("\n| YOU ARE NOW ENTERING THE HYRULE CASTLE. ".concat(c.red('IT IS DANGEROUS TO GO ALONE'), ". GOOD LUCK OUT THERE! |"));
    while (floor <= lastStage) {
        // console.log('début de boucle');
        bossCheck = floor / 10;
        // console.log(bossCheck);
        if (Number.isInteger(bossCheck)) {
            if ((0, hud_1.default)(hero, boss, maxHeroHP, maxBossHP, coins, floor)[1] === 0) {
                if (floor === lastStage) {
                    console.clear();
                    prompt("After putting down the mighty ".concat(boss.name, ", a familiar and shining figure finally appears from the sky, descending to the ground. It seems like the seal that was at the top of the Hyrule Castle broke right away."));
                    prompt("???: Thank you for bringing me back to this reality, ".concat(hero.name, "."));
                    console.clear();
                    (0, icons_1.default)('Zelda');
                    prompt("Zelda: I, Princess Zelda, will restore the prosperity of my kingdom, thanks to your efforts.");
                    prompt("\bNow, take some rest, I'll take care of everything else from now on, you did more than enough for everyone.");
                    console.log('');
                    prompt("And this is how ".concat(hero.name, " saved the kingdom from the curse that ").concat(boss.name, " gave."));
                    console.log('');
                    console.log('=== THE END ===\n');
                    process.exit();
                }
                else {
                    // console.log('test2')
                    floor += 1;
                    mob = (0, basic_game_customization_1.diffEnnemy)((0, stageEnnemy_1.default)(floor, titleScreen[1]), titleScreen[0]);
                    // console.log('test');
                    hero.hp = maxHeroHP;
                    var retour = (0, level_and_experience_1.default)(hero, xp, maxXP, level);
                    hero = retour[0];
                    xp = retour[1];
                    maxXP = retour[2];
                    level = retour[3];
                    maxHeroHP = hero.hp;
                    maxMobHP = mob.hp;
                    maxBossHP = boss.hp;
                    coins += 1;
                }
            }
        }
        else {
            if ((0, hud_1.default)(hero, mob, maxHeroHP, maxMobHP, coins, floor)[1] === 0) {
                // console.log('check');
                floor += 1;
                mob = (0, stageEnnemy_1.default)(floor, titleScreen[1]);
                boss = (0, basic_game_customization_1.diffEnnemy)((0, stageEnnemy_1.default)(floor, titleScreen[1]), titleScreen[0]);
                // console.log(mob);
                hero.hp = maxHeroHP;
                var retour = (0, level_and_experience_1.default)(hero, xp, maxXP, level);
                hero = retour[0];
                xp = retour[1];
                maxXP = retour[2];
                level = retour[3];
                maxHeroHP = hero.hp;
                maxMobHP = mob.hp;
                maxBossHP = boss.hp;
                coins += 1;
            }
        }
    }
}
exports.default = baseGame;
