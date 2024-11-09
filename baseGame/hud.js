"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as promptSync from 'prompt-sync';
function userInterface(player, ennemy, maxPlayer, maxEnnemy, floor) {
    // Je setup la fonction
    var c = require('ansi-colors');
    var prompt = require('prompt-sync')();
    // Partie HUD
    console.clear();
    console.log("========== FIGHT ".concat(floor, " =========="));
    console.log(c.red(ennemy.name));
    console.log("HP : ".concat(c.red('\u2764'.repeat(ennemy.hp))).concat('_'.repeat(maxEnnemy - ennemy.hp), " ").concat(ennemy.hp, "/").concat(maxEnnemy));
    console.log('');
    console.log(c.green(player.name));
    console.log("HP : ".concat(c.red('\u2764'.repeat(player.hp))).concat('_'.repeat(maxPlayer - player.hp), " ").concat(player.hp, "/").concat(maxPlayer));
    console.log('');
    console.log('--v-- Options --v--');
    console.log('1. Attack    2. Heal');
    console.log('');
    var choice = prompt('Type your option : ').toLowerCase();
    if (choice === 'attack' || choice === '1') {
        ennemy.hp -= player.str;
        console.log('');
        prompt("You attacked and dealt ".concat(player.str, " damages!"));
        console.log('');
        if (ennemy.hp <= 0) {
            ennemy.hp = 0;
            console.log(c.red("".concat(ennemy.name, " died!")));
            console.log('');
            console.log('=== PRESS ENTER TO CONTINUE ===');
            console.log('');
            prompt('');
            return [player.hp, ennemy.hp];
        }
    }
    else if (choice === 'heal' || choice === '2') {
        player.hp += maxPlayer / 2;
        console.log('');
        prompt('You used heal!');
        console.log('');
        if (player.hp > maxPlayer) {
            player.hp = maxPlayer;
        }
    }
    else {
        console.log('');
        prompt("You decided to wait for the right moment to hit ".concat(ennemy.name, "."));
        console.log('');
    }
    player.hp -= ennemy.str;
    prompt("".concat(ennemy.name, " attacked and dealt ").concat(ennemy.str, " damages!"));
    console.log('');
    console.log(ennemy.hp);
    if (player.hp <= 0) {
        player.hp = 0;
        console.log('The Hyrule Kingdom will never be able to recover from that incident. Ganon as taken over the world.');
        console.log('=== You died. ===');
        console.log('=== GAME OVER ===');
        process.exit();
    }
    return [player.hp, ennemy.hp];
}
exports.default = userInterface;
