import { charObj } from './stageEnnemy';
// import * as promptSync from 'prompt-sync';

export default function userInterface(player: charObj, ennemy: charObj, maxPlayer: number, maxEnnemy: number, floor: number): number[] {

// Je setup la fonction
  
  const c = require('ansi-colors');
  const prompt = require('prompt-sync')();

// Partie HUD
  console.clear();

  console.log(`========== FIGHT ${floor} ==========`)
  console.log(c.red(ennemy.name));
  console.log(`HP : ${c.red('\u2764'.repeat(ennemy.hp))}${'_'.repeat(maxEnnemy - ennemy.hp)} ${ennemy.hp}/${maxEnnemy}`);
  console.log('');
  console.log(c.green(player.name));
  console.log(`HP : ${c.red('\u2764'.repeat(player.hp))}${'_'.repeat(maxPlayer - player.hp)} ${player.hp}/${maxPlayer}`);
  console.log('');
  console.log('--v-- Options --v--');
  console.log('1. Attack    2. Heal');
  console.log('');
  
  const choice = prompt('Type your option : ').toLowerCase();
  
  if (choice === 'attack' || choice === '1') {
    ennemy.hp -= player.str;
    console.log('');
    prompt(`You attacked and dealt ${player.str} damages!`);
    console.log('');
    if (ennemy.hp <= 0) {
      ennemy.hp = 0;
      console.log(c.red(`${ennemy.name} died!`));
      console.log('');
      console.log('=== PRESS ENTER TO CONTINUE ===');
      console.log('');
      prompt('');
      return [player.hp, ennemy.hp];
    }
  } else if (choice === 'heal' || choice === '2') {
    player.hp += maxPlayer/2;
    console.log('');
    prompt('You used heal!');
    console.log('');
    if (player.hp > maxPlayer) {
      player.hp = maxPlayer;
    }
  } else {
    console.log('');
    prompt(`You decided to wait for the right moment to hit ${ennemy.name}.`);
    console.log('');
  }

  player.hp -= ennemy.str;
  prompt(`${ennemy.name} attacked and dealt ${ennemy.str} damages!`);
  console.log('');
  console.log(ennemy.hp);
  if (player.hp <= 0) {
    player.hp = 0;
    console.log('The Hyrule Kingdom will never be able to recover from that incident. Ganon as taken over the world.');
    console.log('=== You died. ===');
    console.log('=== GAME OVER ===');
    process.exit();
  }

  return [ player.hp, ennemy.hp ];
}
