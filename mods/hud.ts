import { charObj } from './stageEnnemy';
// import addCombatOptions from './mods/better_combat_options';
import { speed } from './mods/more_statistics';

export default function userInterface(player: charObj, ennemy: charObj, maxPlayer: number, maxEnnemy: number, coins: number, floor: number): number[] {

// Je setup la fonction
  
  const c = require('ansi-colors');
  const prompt = require('prompt-sync')();

// Partie HUD

  console.log(`========== FIGHT ${floor} ==========`)
  console.log(c.red(ennemy.name));
  console.log(`HP : ${c.red('\u2764'.repeat(ennemy.hp))}${'_'.repeat(maxEnnemy - ennemy.hp)} ${ennemy.hp}/${maxEnnemy}`);
  console.log('');
  console.log(c.green(player.name));
  console.log(`HP : ${c.red('\u2764'.repeat(player.hp))}${'_'.repeat(maxPlayer - player.hp)} ${player.hp}/${maxPlayer}`);
  console.log('');
  console.log(`You got currently ${c.yellow(coins)} coins.\n`);
  console.log('----v----   ----v--Options--v----  ----v----');
  console.log('1. Attack    2. Heal    3. Guard    4. Run');
  console.log('');
  
  const choice = prompt('Type your option : ').toLowerCase();

  speed(player, ennemy, maxPlayer, maxEnnemy, coins, choice);

  return [player.hp, ennemy.hp];
}
