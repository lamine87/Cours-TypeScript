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
 
// const niveau = 10;
// console.log(niveau);

let variable = "test";
function reset() : void {
    let variable = "toto"
    console.log(variable);
}

reset();
console.log(variable);

///// arrow fonctions

function multiplier1(x:number , y:number) : number {

    return x * y;1
  }
  console.log(multiplier1(2, 5));


  const multiplier2 = (number1 : number, number2: number) =>number1 * number2

  console.log(multiplier2(2, 5));

//// Fonction sans argument qui dit bonjour
const saluer = ()=> console.log("Bonjour");
saluer();


//// Fonction avec argument qui dit bonjour
const saluer2 = (name: string)=> console.log("Bonjour: " +name);

saluer2("Pipen");


//// Fonction avec parametres par defaut
const multiplier3 = (number1 : number,  number2: number = 100)=> number1 * number2;
console.log(multiplier3(5));


//// Spread
const numbers = [2,10,11,12];
console.log("biggest: " + Math.max(1,-22,500,400));
console.log(Math.max(...numbers));

//// Rest operation
function consruireTableau(arg1: number, arg2: number): number[]{
    return [arg1, arg2]
}
function consruireTableau_RestOperator(arg1: string, ...args: number[]){
    return arg1 + args;
}
console.log(consruireTableau(10,20));
console.log(consruireTableau_RestOperator("moi", 20, 15, 20, 50, 78));
console.log(consruireTableau_RestOperator("moi", 20, 15, 20, 50, 78, 80, 2, 50));

