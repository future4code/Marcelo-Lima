import app from "./app";

app


// Exercício 1
// a) serve para adicionar informações na class
// b) uma vez
// c) com metodos dentro da class

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}

const cpf = "323.262.320-46"
const name = "pikachu"
const age = 20

const newUser: UserAccount = new UserAccount(cpf, name, age)

// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    }
}

// Exercício 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    setAccount(account: UserAccount[]){
        this.accounts = account
    }
    getAccount(){
        return this.accounts
    }
}