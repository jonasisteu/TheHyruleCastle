import { charObj } from "../stageEnnemy";

export default function experience(hero: charObj, xp: number, maxXP: number, level: number): any {
  const prompt = require('prompt-sync')();

  if (xp >= maxXP ) {
    xp = 0;
    level += 1;
    maxXP *= 1.2;
    prompt(`${hero.name} just got to level ${level}!\n`);
    for(let i of Object.keys(hero)) {
      // console.log('bla');
      if (typeof hero[i] === "number") {
        hero[i] = Math.floor(hero[i] * (Math.random() * (1.2 - 1.1) + 1.1));
        // hero[i] = hero[i].toFixed(1);
        // console.log(hero[i]);
      }
    }
    // console.log('j\'vais me flinguer');
    // return [hero, xp, maxXP, level];
  } else {
    xp += Math.floor(Math.random() * (50 - 15) + 15)
    // return [hero, xp, maxXP, level];
    // console.log('else');
  }
  // console.log('ici');
  return [hero, xp, maxXP, level];
}
