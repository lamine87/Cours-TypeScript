class Person{
    name: string;
    private type : string = "";
    protected age : number = 20;
    constructor(name: string, public username: string){
        this.name = name;
    }
    printAge(){
        console.log(this.age);
        this.setType("Feminin");
    }
    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

    const personne1 = new Person("Pierre", "PR");
    console.log(personne1);
    personne1.printAge();