"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var meHuman = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sport", "Cooking"]
};
meHuman.bankAccount.deposit(3000);
console.log(meHuman);
