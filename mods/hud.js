"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import addCombatOptions from './mods/better_combat_options';
var more_statistics_1 = require("./mods/more_statistics");
function userInterface(player, ennemy, maxPlayer, maxEnnemy, coins, floor) {
    // Je setup la fonction
    var c = require('ansi-colors');
    var prompt = require('prompt-sync')();
    // Partie HUD
    console.log("========== FIGHT ".concat(floor, " =========="));
    console.log(c.red(ennemy.name));
    console.log("HP : ".concat(c.red('\u2764'.repeat(ennemy.hp))).concat('_'.repeat(maxEnnemy - ennemy.hp), " ").concat(ennemy.hp, "/").concat(maxEnnemy));
    console.log('');
    console.log(c.green(player.name));
    console.log("HP : ".concat(c.red('\u2764'.repeat(player.hp))).concat('_'.repeat(maxPlayer - player.hp), " ").concat(player.hp, "/").concat(maxPlayer));
    console.log('');
    console.log("You got currently ".concat(c.yellow(coins), " coins.\n"));
    console.log('----v----   ----v--Options--v----  ----v----');
    console.log('1. Attack    2. Heal    3. Guard    4. Run');
    console.log('');
    var choice = prompt('Type your option : ').toLowerCase();
    (0, more_statistics_1.speed)(player, ennemy, maxPlayer, maxEnnemy, coins, choice);
    return [player.hp, ennemy.hp];
}
exports.default = userInterface;
