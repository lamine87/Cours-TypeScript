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
