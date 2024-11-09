import { charObj } from './stageEnnemy';


function randomCharacter(): charObj {
  const rarPlayer = Math.floor(Math.random() * 100);
  const character = require('./json/players.json');
  let hero: charObj = character[0];

  if (rarPlayer <= 50) {
    hero = structuredClone(character[0]);
  } else if (50 < rarPlayer && rarPlayer <= 80) {
    hero = structuredClone(character[1]);
  } else if (80 < rarPlayer && rarPlayer <= 95) {
    hero = structuredClone(character[2]);
  } else if (95 < rarPlayer && rarPlayer <= 99) {
    hero = structuredClone(character[3]);
  } else if (99 < rarPlayer) {
    hero = structuredClone(character[4]);
  }

  // console.log(`${rarPlayer}%, you will play then ${hero.name}! Good luck out there!`);
  return hero;
}

function randomRarityEnnemy(): charObj {
  const ennemy: charObj[] = require('./json/ennemies');

  const rarBoss = Math.floor(Math.random() * 100);
  let mob: charObj;

  const rarityEnnemy1: charObj[] = ennemy.filter((ennemy: charObj) => ennemy.rarity === 1);
  const rarityEnnemy2: charObj[] = ennemy.filter((ennemy: charObj) => ennemy.rarity === 2);
  const rarityEnnemy3: charObj[] = ennemy.filter((ennemy: charObj) => ennemy.rarity === 3);
  const rarityEnnemy4: charObj[] = ennemy.filter((ennemy: charObj) => ennemy.rarity === 4);
  const rarityEnnemy5: charObj[] = ennemy.filter((ennemy: charObj) => ennemy.rarity === 5);

  if (50 < rarBoss && rarBoss <= 80) {
    mob = structuredClone(rarityEnnemy2[Math.floor(Math.random() * rarityEnnemy2.length)]);
  } else if (80 < rarBoss && rarBoss <= 95) {
    mob = structuredClone(rarityEnnemy3[Math.floor(Math.random() * rarityEnnemy3.length)]);
  } else if (95 < rarBoss && rarBoss <= 99) {
    mob = structuredClone(rarityEnnemy4[Math.floor(Math.random() * rarityEnnemy4.length)]);
  } else if (99 < rarBoss) {
    mob = structuredClone(rarityEnnemy5[Math.floor(Math.random() * rarityEnnemy5.length)]);
  } else {
    mob = structuredClone(rarityEnnemy1[0]);
  }

  // console.log(`${rarBoss}%, you will fight then ${mob.name}! Good luck out there!`);
  return mob;
}

function randomRarityBoss(): charObj {
  
  const rarBoss = Math.floor(Math.random() * 100);
  const boss: charObj[] = require('./json/bosses');
  let moBoss: charObj = boss[0];

  const rarityBoss1: charObj[] = boss.filter((boss: charObj) => boss.rarity === 1);
  const rarityBoss2: charObj[] = boss.filter((boss: charObj) => boss.rarity === 2);
  const rarityBoss3: charObj[] = boss.filter((boss: charObj) => boss.rarity === 3);
  const rarityBoss4: charObj[] = boss.filter((boss: charObj) => boss.rarity === 4);
  const rarityBoss5: charObj[] = boss.filter((boss: charObj) => boss.rarity === 5);

  if (50 < rarBoss && rarBoss <= 80) {
    moBoss = structuredClone(rarityBoss2[Math.floor(Math.random() * rarityBoss2.length)]);
  } else if (80 < rarBoss && rarBoss <= 95) {
    moBoss = structuredClone(rarityBoss3[Math.floor(Math.random() * rarityBoss3.length)]);
  } else if (95 < rarBoss && rarBoss <= 99) {
    moBoss = structuredClone(rarityBoss4[Math.floor(Math.random() * rarityBoss4.length)]);
  } else if (99 < rarBoss) {
    moBoss = structuredClone(rarityBoss5[Math.floor(Math.random() * rarityBoss5.length)]);
  } else {
    moBoss = structuredClone(rarityBoss1[0]);
  }

  // console.log(`${rarBoss}%, you will fight then ${moBoss.name}! Good luck out there!`);
  return moBoss;
}

// export function 

export { randomCharacter, randomRarityEnnemy, randomRarityBoss };
