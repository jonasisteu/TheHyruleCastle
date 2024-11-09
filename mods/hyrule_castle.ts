import { titleScreen } from './mods/basic_game_customization';
import baseGame from './baseGame';

try {
baseGame(titleScreen());
} catch {
  console.log('\nYou left the game.\n');
}
