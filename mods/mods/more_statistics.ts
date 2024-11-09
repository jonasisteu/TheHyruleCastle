import { charObj } from '../stageEnnemy';
import { playerTurn } from '../turn';
import { ennemyTurn } from '../turn';


function speed(player: charObj, ennemy: charObj, maxPlayer: number, maxEnnemy: number, coins: number, choice: string): number[] {
  
// On vérifie d'abord la vitesse
  
  if (player.spd > ennemy.spd) {
// Si le joueur est + rapide
    playerTurn(player, ennemy, maxPlayer, coins, choice);
    ennemyTurn(player, ennemy, choice);

  } else {
// Si l'ennemi est + rapide
    ennemyTurn(player, ennemy, choice);
    playerTurn(player, ennemy, maxPlayer, coins, choice);
  }
  
  return [player.hp, ennemy.hp];
}

function defRes(oneStr: number, twoDefRes: number): number {
  oneStr -= oneStr * (twoDefRes/100);
  return Math.floor(oneStr);
}

export { speed, defRes }
