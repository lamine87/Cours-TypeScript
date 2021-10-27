"use strict";
console.log("Bonjour");
var MyName = "Pierre";
console.log(MyName);
var sport = ["football", "basket", "handball"]; //permet de définir un tableau
console.log(sport[1]); // affiche le deuxième élement du tableau
console.log(typeof sport); // affiche le type de l'élement
var Couleur;
(function (Couleur) {
    Couleur[Couleur["gris"] = 0] = "gris";
    Couleur[Couleur["bleu"] = 1] = "bleu";
    Couleur[Couleur["jaune"] = 2] = "jaune";
    Couleur[Couleur["ver"] = 3] = "ver";
})(Couleur || (Couleur = {}));
var maCouleur = Couleur.jaune;
console.log(maCouleur);
function direNom() {
    return MyName;
}
console.log(direNom());
// Fonction sans argument, retourne rien
function direBonjour() {
    console.log("Bonjour");
    direBonjour();
}
/// Faire une fonction qui prend 2 nombres entiers, les multiplie et retourne un resultat entier
function multiplier(x, y) {
    return x * y;
}
console.log(multiplier(2, 5));
/// 
var personne = {
    age: 27,
    prenom: "Laurent",
    nom: "titi"
};
console.log(personne);
console.log(personne.nom);
///  Type multiple
var myVariable = 30;
myVariable = 121;
myVariable = "titi";
myVariable = true;
var valeurFinale = "100";
if (typeof valeurFinale == "number") {
    console.log("Ceci est un type number");
}
else {
    console.log("Type inconnu");
}
// const niveau = 10;
// console.log(niveau);
var variable = "test";
function reset() {
    var variable = "toto";
    console.log(variable);
}
reset();
console.log(variable);
///// arrow fonctions
function multiplier1(x, y) {
    return x * y;
    1;
}
console.log(multiplier1(2, 5));
var multiplier2 = function (number1, number2) { return number1 * number2; };
console.log(multiplier2(2, 5));
//// Fonction sans argument qui dit bonjour
var saluer = function () { return console.log("Bonjour"); };
saluer();
//// Fonction avec argument qui dit bonjour
var saluer2 = function (name) { return console.log("Bonjour: " + name); };
saluer2("Pipen");
//// Fonction avec parametres par defaut
var multiplier3 = function (number1, number2) {
    if (number2 === void 0) { number2 = 100; }
    return number1 * number2;
};
console.log(multiplier3(5));
//// Spread
var numbers = [2, 10, 11, 12];
console.log("biggest: " + Math.max(1, -22, 500, 400));
console.log(Math.max.apply(Math, numbers));
//// Rest operation
function consruireTableau(arg1, arg2) {
    return [arg1, arg2];
}
function consruireTableau_RestOperator(arg1) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return arg1 + args;
}
console.log(consruireTableau(10, 20));
console.log(consruireTableau_RestOperator("moi", 20, 15, 20, 50, 78));
console.log(consruireTableau_RestOperator("moi", 20, 15, 20, 50, 78, 80, 2, 50));
