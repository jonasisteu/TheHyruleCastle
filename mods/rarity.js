"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomRarityBoss = exports.randomRarityEnnemy = exports.randomCharacter = void 0;
function randomCharacter() {
    var rarPlayer = Math.floor(Math.random() * 100);
    var character = require('./json/players.json');
    var hero = character[0];
    if (rarPlayer <= 50) {
        hero = structuredClone(character[0]);
    }
    else if (50 < rarPlayer && rarPlayer <= 80) {
        hero = structuredClone(character[1]);
    }
    else if (80 < rarPlayer && rarPlayer <= 95) {
        hero = structuredClone(character[2]);
    }
    else if (95 < rarPlayer && rarPlayer <= 99) {
        hero = structuredClone(character[3]);
    }
    else if (99 < rarPlayer) {
        hero = structuredClone(character[4]);
    }
    // console.log(`${rarPlayer}%, you will play then ${hero.name}! Good luck out there!`);
    return hero;
}
exports.randomCharacter = randomCharacter;
function randomRarityEnnemy() {
    var ennemy = require('./json/ennemies');
    var rarBoss = Math.floor(Math.random() * 100);
    var mob;
    var rarityEnnemy1 = ennemy.filter(function (ennemy) { return ennemy.rarity === 1; });
    var rarityEnnemy2 = ennemy.filter(function (ennemy) { return ennemy.rarity === 2; });
    var rarityEnnemy3 = ennemy.filter(function (ennemy) { return ennemy.rarity === 3; });
    var rarityEnnemy4 = ennemy.filter(function (ennemy) { return ennemy.rarity === 4; });
    var rarityEnnemy5 = ennemy.filter(function (ennemy) { return ennemy.rarity === 5; });
    if (50 < rarBoss && rarBoss <= 80) {
        mob = structuredClone(rarityEnnemy2[Math.floor(Math.random() * rarityEnnemy2.length)]);
    }
    else if (80 < rarBoss && rarBoss <= 95) {
        mob = structuredClone(rarityEnnemy3[Math.floor(Math.random() * rarityEnnemy3.length)]);
    }
    else if (95 < rarBoss && rarBoss <= 99) {
        mob = structuredClone(rarityEnnemy4[Math.floor(Math.random() * rarityEnnemy4.length)]);
    }
    else if (99 < rarBoss) {
        mob = structuredClone(rarityEnnemy5[Math.floor(Math.random() * rarityEnnemy5.length)]);
    }
    else {
        mob = structuredClone(rarityEnnemy1[0]);
    }
    // console.log(`${rarBoss}%, you will fight then ${mob.name}! Good luck out there!`);
    return mob;
}
exports.randomRarityEnnemy = randomRarityEnnemy;
function randomRarityBoss() {
    var rarBoss = Math.floor(Math.random() * 100);
    var boss = require('./json/bosses');
    var moBoss = boss[0];
    var rarityBoss1 = boss.filter(function (boss) { return boss.rarity === 1; });
    var rarityBoss2 = boss.filter(function (boss) { return boss.rarity === 2; });
    var rarityBoss3 = boss.filter(function (boss) { return boss.rarity === 3; });
    var rarityBoss4 = boss.filter(function (boss) { return boss.rarity === 4; });
    var rarityBoss5 = boss.filter(function (boss) { return boss.rarity === 5; });
    if (50 < rarBoss && rarBoss <= 80) {
        moBoss = structuredClone(rarityBoss2[Math.floor(Math.random() * rarityBoss2.length)]);
    }
    else if (80 < rarBoss && rarBoss <= 95) {
        moBoss = structuredClone(rarityBoss3[Math.floor(Math.random() * rarityBoss3.length)]);
    }
    else if (95 < rarBoss && rarBoss <= 99) {
        moBoss = structuredClone(rarityBoss4[Math.floor(Math.random() * rarityBoss4.length)]);
    }
    else if (99 < rarBoss) {
        moBoss = structuredClone(rarityBoss5[Math.floor(Math.random() * rarityBoss5.length)]);
    }
    else {
        moBoss = structuredClone(rarityBoss1[0]);
    }
    // console.log(`${rarBoss}%, you will fight then ${moBoss.name}! Good luck out there!`);
    return moBoss;
}
exports.randomRarityBoss = randomRarityBoss;
