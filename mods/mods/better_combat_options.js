"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addCombatOptions(choice, playerHP, ennemyDamage) {
    var prompt = require('prompt-sync')();
    if (choice === 'guard' || choice === '3') {
        playerHP += Math.floor(ennemyDamage / 2);
        console.log('');
        prompt("You decided to guard the next hit.");
        console.log('');
        return playerHP;
    }
    else if (choice === 'escape' || choice === '4') {
        console.log('');
        prompt('You tried to leave the room. Unfortunately the ennemy is right in front the door!');
        return playerHP;
    }
    return 1;
}
exports.default = addCombatOptions;
