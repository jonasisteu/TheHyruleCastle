"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function experience(hero, xp, maxXP, level) {
    var prompt = require('prompt-sync')();
    if (xp >= maxXP) {
        xp = 0;
        level += 1;
        maxXP *= 1.2;
        prompt("".concat(hero.name, " just got to level ").concat(level, "!\n"));
        for (var _i = 0, _a = Object.keys(hero); _i < _a.length; _i++) {
            var i = _a[_i];
            // console.log('bla');
            if (typeof hero[i] === "number") {
                hero[i] = Math.floor(hero[i] * (Math.random() * (1.2 - 1.1) + 1.1));
                // hero[i] = hero[i].toFixed(1);
                // console.log(hero[i]);
            }
        }
        // console.log('j\'vais me flinguer');
        // return [hero, xp, maxXP, level];
    }
    else {
        xp += Math.floor(Math.random() * (50 - 15) + 15);
        // return [hero, xp, maxXP, level];
        // console.log('else');
    }
    // console.log('ici');
    return [hero, xp, maxXP, level];
}
exports.default = experience;
