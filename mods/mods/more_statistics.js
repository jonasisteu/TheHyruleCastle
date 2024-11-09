"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defRes = exports.speed = void 0;
var turn_1 = require("../turn");
var turn_2 = require("../turn");
function speed(player, ennemy, maxPlayer, maxEnnemy, coins, choice) {
    // On vérifie d'abord la vitesse
    if (player.spd > ennemy.spd) {
        // Si le joueur est + rapide
        (0, turn_1.playerTurn)(player, ennemy, maxPlayer, coins, choice);
        (0, turn_2.ennemyTurn)(player, ennemy, choice);
    }
    else {
        // Si l'ennemi est + rapide
        (0, turn_2.ennemyTurn)(player, ennemy, choice);
        (0, turn_1.playerTurn)(player, ennemy, maxPlayer, coins, choice);
    }
    return [player.hp, ennemy.hp];
}
exports.speed = speed;
function defRes(oneStr, twoDefRes) {
    oneStr -= oneStr * (twoDefRes / 100);
    return Math.floor(oneStr);
}
exports.defRes = defRes;
