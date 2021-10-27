type bankAccount = {money: number, deposit: (val: number)=> void};

let bankAccount :  bankAccount ={ 
    money : 2000,
    deposit(value : number): void {
        this.money += value;

    }
}

let meHuman : {name: string, bankAccount: bankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount : bankAccount,
    hobbies : ["Sport","Cooking"]
}

meHuman.bankAccount.deposit(3000);
console.log(meHuman);
