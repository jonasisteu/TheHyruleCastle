// const ennemies = require('./json/ennemies.json');
// const bosses = require('./json/bosses.json');
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

function stageCheck (floor: number): charObj {
  
  if (floor < 10) {
    let mob: charObj = randomRarityEnnemy();
    return mob;
  } else {
    let boss: charObj = randomRarityBoss();
    return boss;
  }
}

export default stageCheck;
export { charObj };
