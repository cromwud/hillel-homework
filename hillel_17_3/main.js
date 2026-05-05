'use strict';

class BankAccount {
    
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    
    getBalance() {
        return this.#balance;
    }


    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Поповнено на: ${amount}`);
        } else {
            console.log("Сума поповнення має бути більшою за нуль.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума зняття має бути більшою за нуль.");
        } else if (amount > this.#balance) {
            console.log("Недостатньо коштів на рахунку!");
        } else {
            this.#balance -= amount;
            console.log(`Знято: ${amount}`);
        }
    }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300

