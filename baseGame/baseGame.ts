// const player = require('./json/players.json');
import userInterface from './hud';
import { charObj } from './stageEnnemy';
import stageCheck from './stageEnnemy';
import { randomCharacter } from './rarity';

console.clear();
// const prompt = promptSync();

function baseGame() : void {

  const c = require('ansi-colors');
  let floor: number = 1;
  
  let hero: charObj = randomCharacter();
  let mob: charObj = stageCheck(floor);
  let boss: charObj = stageCheck(10);
  
  const maxHeroHP: number = hero.hp;
  const maxMobHP: number = mob.hp;
  const maxBossHP: number = boss.hp;

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
      if (userInterface(hero, boss, maxHeroHP, maxBossHP, floor)[1] === 0) {
        console.log(`Zelda: Thanks for saving the Hyrule Kingdom, ${hero.name}.`);
        console.log('')
        process.exit();
      } else {
        // console.log('ici');
      }
    } else {
      if (userInterface(hero, mob, maxHeroHP, maxMobHP, floor)[1] === 0) {
        // console.log('là');
        floor += 1;
        mob = stageCheck(floor);
        hero.hp = maxHeroHP;
        mob.hp = maxMobHP;
      } else {
        // console.log('ici');
      }
    }
  }
}

export default baseGame;
