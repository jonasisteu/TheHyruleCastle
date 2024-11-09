// const ennemies = require('./json/ennemies.json');
import { randomRarityEnnemy, randomRarityBoss } from './rarity';

interface charObj {
  id: number;
  name: string;
  hp: number;
  mp: number;
  str: number;
  int: number;
  def: number;
  res: number;
  spd: number;
  luck: number;
  race: number;
  class: number;
  rarity: number
}

function stageCheck (floor: number, maxFloor: string): charObj {
  let lastStage: number = 0;
  if (maxFloor === '10') {
    lastStage = 10;
  } else if (maxFloor === '20') {
    lastStage = 20;
  } else if (maxFloor === '50') {
    lastStage = 50;
  } else if (maxFloor === '100') {
    lastStage = 100;
  }

  if (floor < lastStage && floor !== 10 && floor !== 20 && floor !== 50 && floor !== 10) {
    let mob: charObj = randomRarityEnnemy();
    return mob;
  } else {
    let boss: charObj = randomRarityBoss();
    return boss;
  }
}

export default stageCheck;
export { charObj };
