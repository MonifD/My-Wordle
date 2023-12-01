"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
function isInvalidInput(word) {
    return word.length > 5 || word.length < 5 || word.toLowerCase() === word;
}
var motchercher = (0, lib_1.getInput)('Deviner un mots de 5 lettre : ');
while (isInvalidInput(motchercher)) {
    console.log("Erreur : Le mot doit avoir 5 caractères et ne pas être en minuscules.");
    motchercher = (0, lib_1.getInput)('Deviner un mot de 5 lettres (pas de minuscules) : ').toUpperCase();
}
var randomword = (0, lib_1.getRandomWord)();
console.clear();
var count = 1;
var n = 6;
var _loop_1 = function () {
    console.clear();
    var hints = [];
    motchercher.split('').forEach(function (letter, index) {
        if (randomword[index] === letter) {
            hints.push("\u001B[32m".concat(letter, "\u001B[0m"));
        }
        else if (randomword.includes(letter)) {
            hints.push("\u001B[33m".concat(letter, "\u001B[0m"));
        }
        else {
            hints.push(letter);
        }
    });
    var hintString = hints.join(' ');
    console.log(hintString);
    motchercher = (0, lib_1.getInput)("Retenter votre chance il vous reste ".concat(n - 1, ", essaie :")).toUpperCase();
    count++;
    n--;
};
while (motchercher !== randomword && count < 6) {
    _loop_1();
}
if (motchercher === randomword) {
    console.log("Vous avez gagner ! Le mot \u00E9tait, \u001B[32m".concat(randomword, "\u001B[0m"));
}
else {
    console.log('Dommage vous avez utiliser toutes vos chance');
}
