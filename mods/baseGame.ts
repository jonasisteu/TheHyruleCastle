// const player = require('./json/players.json');
import userInterface from './hud';
import { charObj } from './stageEnnemy';
import stageCheck from './stageEnnemy';
import { randomCharacter } from './rarity';
import { diffEnnemy } from './mods/basic_game_customization';
import experience from './mods/level_and_experience';
import icons from './icons';

console.clear();
// const prompt = promptSync();

function baseGame(titleScreen: string[]) : void {

  const prompt = require('prompt-sync')();
  const c = require('ansi-colors');
  let floor: number = 1;
  
  let hero: charObj = randomCharacter();
  let mob: charObj = diffEnnemy(stageCheck(floor, titleScreen[1]), titleScreen[0]);
  let boss: charObj = diffEnnemy(stageCheck(10, titleScreen[1]), titleScreen[0]);
  let level: number = 1;
  let xp: number = 0;
  let maxXP: number = 60;
  let coins: number = 12;

  let lastStage: number = 0;
  let bossCheck: number;

  if (titleScreen[1] === '10') {
    lastStage = 10;
  } else if (titleScreen[1] === '20') {
    lastStage = 20;
  } else if (titleScreen[1] === '50') {
    lastStage = 50;
  } else if (titleScreen[1] === '100') {
    lastStage = 100;
  }
  
  let maxHeroHP: number = hero.hp;
  let maxMobHP: number = mob.hp;
  let maxBossHP: number = boss.hp;

  console.clear();
  prompt(`You are a mighty warrior running by the name of ${hero.name}.`);
  prompt('The Hyrule Kingdom needs you! It\'s most important place being the Hyrule Castle, it is filled by vicious creatures.');
  prompt(`Problem is, the world fell down one day to another, leaving no clue of the author of this.`);
  icons('Ganon');
  prompt(`\bIt could be Ganon, the dark lord, but you can't be sure of it.`);
  prompt(`\nThe best way to find that out is to face them all.`);
  prompt(`\n| YOU ARE NOW ENTERING THE HYRULE CASTLE. ${c.red('IT IS DANGEROUS TO GO ALONE')}. GOOD LUCK OUT THERE! |`);
    
  while (floor <= lastStage) {
    // console.log('début de boucle');
    bossCheck = floor/10;
    // console.log(bossCheck);
    if (Number.isInteger(bossCheck)) {
      if (userInterface(hero, boss, maxHeroHP, maxBossHP, coins, floor)[1] === 0) {
        if (floor === lastStage) {
          console.clear();
          prompt(`After putting down the mighty ${boss.name}, a familiar and shining figure finally appears from the sky, descending to the ground. It seems like the seal that was at the top of the Hyrule Castle broke right away.`);
          prompt(`???: Thank you for bringing me back to this reality, ${hero.name}.`)
          console.clear();
          icons('Zelda');
          prompt(`Zelda: I, Princess Zelda, will restore the prosperity of my kingdom, thanks to your efforts.`);
          prompt(`\bNow, take some rest, I'll take care of everything else from now on, you did more than enough for everyone.`);
          console.log('');
          prompt(`And this is how ${hero.name} saved the kingdom from the curse that ${boss.name} gave.`)
          console.log('');
          console.log('=== THE END ===\n')
          process.exit();
        } else {
          // console.log('test2')
          floor += 1;
          mob = diffEnnemy(stageCheck(floor, titleScreen[1]), titleScreen[0]);
          // console.log('test');
          hero.hp = maxHeroHP;
          const retour = experience(hero, xp, maxXP, level);
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
    } else {
      if (userInterface(hero, mob, maxHeroHP, maxMobHP, coins, floor)[1] === 0) {
        // console.log('check');
        floor += 1;
        mob = stageCheck(floor, titleScreen[1]);
        boss = diffEnnemy(stageCheck(floor, titleScreen[1]), titleScreen[0]);
        // console.log(mob);
        hero.hp = maxHeroHP;
        const retour = experience(hero, xp, maxXP, level);
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

export default baseGame;
