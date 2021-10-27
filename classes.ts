class Person{
    name: string;
    private type : string = "";
    protected age : number = 20;
    constructor(name: string, public username: string){
        this.name = name;
    }
}