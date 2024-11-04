import { getInput, getRandomWord } from './lib.js';
function isInvalidInput(word) {
    return word.length !== 5 || word !== word.toUpperCase();
}
let motchercher = getInput('Deviner un mot de 5 lettres en MAJUSCULES : ');
while (isInvalidInput(motchercher)) {
    console.log("Erreur : Le mot doit avoir 5 caractères et être en MAJUSCULES.");
    motchercher = getInput('Deviner un mot de 5 lettres : ').toUpperCase();
}
const randomword = getRandomWord();
console.clear();
let count = 1;
const maxAttempts = 6;
while (motchercher !== randomword && count <= maxAttempts) {
    const hints = motchercher.split('').map((letter, index) => {
        if (randomword[index] === letter) {
            return `\x1b[32m${letter}\x1b[0m`; // Vert : bonne lettre et bonne position
        }
        else if (randomword.includes(letter)) {
            return `\x1b[33m${letter}\x1b[0m`; // Jaune : lettre correcte mais mauvaise position
        }
        else {
            return `\x1b[31m${letter}\x1b[0m`; // Rouge : lettre incorrecte
        }
    });
    console.clear();
    console.log(hints.join(' '));
    motchercher = getInput(`Retentez votre chance, il vous reste ${maxAttempts - count} essai(s) :`).toUpperCase();
    count++;
}
if (motchercher === randomword) {
    console.log(`Vous avez gagné ! Le mot était : \x1b[32m${randomword}\x1b[0m`);
}
else {
    console.log(`Dommage, vous avez utilisé toutes vos chances. Le mot était : ${randomword}`);
}
