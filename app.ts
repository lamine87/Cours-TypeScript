console.log("Bonjour");
let MyName = "Pierre";
console.log(MyName);

let sport: any[] = ["football", "basket","handball"]; //permet de définir un tableau
console.log(sport[1]); // affiche le deuxième élement du tableau
console.log(typeof sport); // affiche le type de l'élement

enum Couleur{
    gris,
    bleu,
    jaune,
    ver
}
let maCouleur : Couleur = Couleur.jaune;
console.log(maCouleur);


function direNom() : string {

    return MyName

}
console.log(direNom());

// Fonction sans argument, retourne rien
function direBonjour() : void {

    console.log("Bonjour");
    direBonjour();

}

/// Faire une fonction qui prend 2 nombres entiers, les multiplie et retourne un resultat entier

function multiplier(x:number , y:number) : number {

  return x * y;
}
console.log(multiplier(2, 5));

/// 

let personne : { nom: string, prenom: string, age: number } = {
    age: 27,
    prenom: "Laurent",
    nom: "titi"
}
console.log(personne);
console.log(personne.nom);

///  Type multiple

let myVariable : number | boolean | string = 30;
    myVariable = 121;
    myVariable = "titi";
    myVariable = true;

    let valeurFinale = "100";

    if (typeof valeurFinale == "number") 
{
    console.log("Ceci est un type number");
}else {
    console.log("Type inconnu");

}
 



