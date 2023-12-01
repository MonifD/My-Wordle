
import { getInput, getRandomWord } from './lib';

function isInvalidInput(word: string): boolean {
  return word.length > 5 || word.length < 5 || word.toLowerCase() === word;
}

let motchercher = getInput('Deviner un mots de 5 lettre : ');

while (isInvalidInput(motchercher)) {
  console.log("Erreur : Le mot doit avoir 5 caractères et ne pas être en minuscules.");
  motchercher = getInput('Deviner un mot de 5 lettres (pas de minuscules) : ').toUpperCase();
}

const randomword = getRandomWord();
console.clear();
let count: number = 1;
let n: number = 6;
while (motchercher !== randomword && count < 6) {
  console.clear();
  const hints: any = [];
  motchercher.split('').forEach((letter: any, index: any) => {
    if (randomword[index] === letter) {
      hints.push(`\x1b[32m${letter}\x1b[0m`);
    } else if (randomword.includes(letter)) {
      hints.push(`\x1b[33m${letter}\x1b[0m`);
    } else {
      hints.push(letter);
    }
  });
  const hintString = hints.join(' ');
  console.log(hintString);
  motchercher = getInput(`Retenter votre chance il vous reste ${n - 1}, essaie :`).toUpperCase();
  count++;
  n--;
}

if (motchercher === randomword) {
  console.log(`Vous avez gagner ! Le mot était, \x1b[32m${randomword}\x1b[0m`);
} else { console.log('Dommage vous avez utiliser toutes vos chance'); }
