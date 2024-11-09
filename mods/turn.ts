import { charObj } from './stageEnnemy';
import addCombatOptions from './mods/better_combat_options';
import { defRes } from './mods/more_statistics'

export function playerTurn(player: charObj, ennemy: charObj, maxPlayer: number, coins: number, choice: string): unknown {
  
  const c = require('ansi-colors');
  const prompt = require('prompt-sync')();
  const dodgeRoll: number = Math.floor(Math.random() * 100); 
  const luckRoll: number = Math.floor(Math.random() * 100);

  if (choice === 'attack' || choice === '1') {
    if (dodgeRoll <= (ennemy.spd - player.spd) && (ennemy.spd - player.spd) > 0) {
      prompt(`${ennemy.name} dodged!\n`);
    } else if (luckRoll <= player.luck) {
      // console.log(luckRoll, player.luck);
      ennemy.hp -= defRes(player.str, ennemy.def) * 2;
      console.log('');
      prompt(`Critical hit!!! ${player.name} dealt ${defRes(player.str, ennemy.def) * 2} damages!`);
      console.log('');
    } else {
      ennemy.hp -= defRes(player.str, ennemy.def);
      console.log('');
      prompt(`${player.name} attacked and dealt ${defRes(player.str, ennemy.def)} damages!`);
      console.log('');
    }
    if (ennemy.hp <= 0) {
      ennemy.hp = 0;
      // console.log(ennemy.hp);
      console.log(c.red(`${ennemy.name} died!`));
      console.log('');
      coins += 1;
      console.log(`You got a coin! Now you have a total of ${coins} coins!`);
      console.log('\n=== PRESS ANY KEY TO CONTINUE ===');
      console.log('');
      prompt('');
      return [player.hp, ennemy.hp];
    }
    return ennemy.hp;
  } else if (choice === 'heal' || choice === '2') {
    player.hp += maxPlayer/2;
    console.log('');
    prompt('You used heal!');
    console.log('');
    if (player.hp > maxPlayer) {
      player.hp = maxPlayer;
    }
  } else if (choice === 'guard' || choice === '3' || choice === 'run' || choice === '4') {
    player.hp = addCombatOptions(choice, player.hp, ennemy.str);
  } else {
    console.log('');
    prompt(`You decided to wait for the right moment to hit ${ennemy.name}.`);
    console.log('');
  }
}


export function ennemyTurn(player: charObj, ennemy: charObj, choice: string): number {

  const c = require('ansi-colors');
  const prompt = require('prompt-sync')();
  const dodgeRoll: number = Math.floor(Math.random() * 100); 
  const luckRoll: number = Math.floor(Math.random() * 100);

  if (ennemy.hp <= 0) {
    return 0;
  } else {
    if (choice === 'guard' || choice === '3') {
      player.hp -= defRes(ennemy.str, player.def);
      prompt(`${ennemy.name} attacked and dealt ${Math.floor(defRes(ennemy.str, player.def)/2)} damages!`);
    } else {
      if (dodgeRoll <= (player.spd - ennemy.spd) && (player.spd - ennemy.spd) > 0) {
        prompt(`${player.name} dodged!`);
      } else if (luckRoll <= ennemy.luck) {
        // console.log(luckRoll, ennemy.luck);
        player.hp -= defRes(ennemy.str, player.def) * 2;
        console.log('');
        prompt(`Critical hit!!! ${ennemy.name} dealt ${defRes(ennemy.str, player.def) * 2} damages!`);
        console.log('');
      } else {
        player.hp -= defRes(ennemy.str, player.def);
        prompt(`${ennemy.name} attacked and dealt ${defRes(ennemy.str, player.def)} damages!`);
      }
    }
    console.log('');
    if (player.hp <= 0) {
      player.hp = 0;
      console.log('The Hyrule Kingdom will never be able to recover from that incident. Ganon as taken over the world.');
      console.log(`=== ${c.red('You died.')} ===`);
      console.log('=== GAME OVER ===');
      process.exit();
    }
  }
  return player.hp;
}
