"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ennemyTurn = exports.playerTurn = void 0;
var better_combat_options_1 = require("./mods/better_combat_options");
var more_statistics_1 = require("./mods/more_statistics");
function playerTurn(player, ennemy, maxPlayer, coins, choice) {
    var c = require('ansi-colors');
    var prompt = require('prompt-sync')();
    var dodgeRoll = Math.floor(Math.random() * 100);
    var luckRoll = Math.floor(Math.random() * 100);
    if (choice === 'attack' || choice === '1') {
        if (dodgeRoll <= (ennemy.spd - player.spd) && (ennemy.spd - player.spd) > 0) {
            prompt("".concat(ennemy.name, " dodged!\n"));
        }
        else if (luckRoll <= player.luck) {
            // console.log(luckRoll, player.luck);
            ennemy.hp -= (0, more_statistics_1.defRes)(player.str, ennemy.def) * 2;
            console.log('');
            prompt("Critical hit!!! ".concat(player.name, " dealt ").concat((0, more_statistics_1.defRes)(player.str, ennemy.def) * 2, " damages!"));
            console.log('');
        }
        else {
            ennemy.hp -= (0, more_statistics_1.defRes)(player.str, ennemy.def);
            console.log('');
            prompt("".concat(player.name, " attacked and dealt ").concat((0, more_statistics_1.defRes)(player.str, ennemy.def), " damages!"));
            console.log('');
        }
        if (ennemy.hp <= 0) {
            ennemy.hp = 0;
            // console.log(ennemy.hp);
            console.log(c.red("".concat(ennemy.name, " died!")));
            console.log('');
            coins += 1;
            console.log("You got a coin! Now you have a total of ".concat(coins, " coins!"));
            console.log('\n=== PRESS ANY KEY TO CONTINUE ===');
            console.log('');
            prompt('');
            return [player.hp, ennemy.hp];
        }
        return ennemy.hp;
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
    else if (choice === 'guard' || choice === '3' || choice === 'run' || choice === '4') {
        player.hp = (0, better_combat_options_1.default)(choice, player.hp, ennemy.str);
    }
    else {
        console.log('');
        prompt("You decided to wait for the right moment to hit ".concat(ennemy.name, "."));
        console.log('');
    }
}
exports.playerTurn = playerTurn;
function ennemyTurn(player, ennemy, choice) {
    var c = require('ansi-colors');
    var prompt = require('prompt-sync')();
    var dodgeRoll = Math.floor(Math.random() * 100);
    var luckRoll = Math.floor(Math.random() * 100);
    if (ennemy.hp <= 0) {
        return 0;
    }
    else {
        if (choice === 'guard' || choice === '3') {
            player.hp -= (0, more_statistics_1.defRes)(ennemy.str, player.def);
            prompt("".concat(ennemy.name, " attacked and dealt ").concat(Math.floor((0, more_statistics_1.defRes)(ennemy.str, player.def) / 2), " damages!"));
        }
        else {
            if (dodgeRoll <= (player.spd - ennemy.spd) && (player.spd - ennemy.spd) > 0) {
                prompt("".concat(player.name, " dodged!"));
            }
            else if (luckRoll <= ennemy.luck) {
                // console.log(luckRoll, ennemy.luck);
                player.hp -= (0, more_statistics_1.defRes)(ennemy.str, player.def) * 2;
                console.log('');
                prompt("Critical hit!!! ".concat(ennemy.name, " dealt ").concat((0, more_statistics_1.defRes)(ennemy.str, player.def) * 2, " damages!"));
                console.log('');
            }
            else {
                player.hp -= (0, more_statistics_1.defRes)(ennemy.str, player.def);
                prompt("".concat(ennemy.name, " attacked and dealt ").concat((0, more_statistics_1.defRes)(ennemy.str, player.def), " damages!"));
            }
        }
        console.log('');
        if (player.hp <= 0) {
            player.hp = 0;
            console.log('The Hyrule Kingdom will never be able to recover from that incident. Ganon as taken over the world.');
            console.log("=== ".concat(c.red('You died.'), " ==="));
            console.log('=== GAME OVER ===');
            process.exit();
        }
    }
    return player.hp;
}
exports.ennemyTurn = ennemyTurn;
