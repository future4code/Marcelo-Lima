import { getgid } from "process";
import app from "./app";

app

////////////////////////////// Exercício 1 //////////////////////////////

// a) Não, porque não existe get para password
// b) 1 vez

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const user = new User("1", "marcelo@labenu.com", "marcelo", "12345")

console.log(user.getId(), user.getEmail(), user.getName())

////////////////////////////// Exercício 2 //////////////////////////////

// a) 1 vez
// b) 2 vezes, porque rodou a class user e depois a customer que tem a class user como extends

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
    public getPuchaseTotal(): number {
        return this.purchaseTotal
    }
}

const newClient = new Customer("2", "pedro@labenu.com", "pedro", "12345", "visa")

console.log(newClient.getCreditCard())

////////////////////////////// Exercício 3 //////////////////////////////

// a) Só seria possivel se fizer um método para retornar o password

console.log(newClient.getId(), newClient.getName(), newClient.getEmail(), newClient.getPuchaseTotal())

////////////////////////////// Exercício 4 //////////////////////////////

console.log(newClient.introduceYourself())

//---------------------------- POLIMORFISMO ----------------------------

////////////////////////////// Exercício 1 //////////////////////////////

// a) Não foi possivel imprimir a função calculateBill, apenas a chave calculateBill

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}

console.log(client)

////////////////////////////// Exercício 2 //////////////////////////////

// a) apareceu o seguinte erro "Cannot create an instance of an abstract class"
// b) criando uma class e usando a class Place como herança

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const newPlace = new Place()

////////////////////////////// Exercício 3 //////////////////////////////

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

////////////////////////////// Exercício 4 //////////////////////////////

// a) um método para pegar o cpf e um método para calcular o consumo de energia

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

////////////////////////////// Exercício 5 //////////////////////////////

// a) por ter o implemento Client, tem todos os argumentos iguais junto com os métodos de calculo
// b) muda ao ser filha da class Commerce mudando os argumentos dessa class e diminuindo o mutiplicador da energia consumida

export class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

////////////////////////////// Exercício 6 //////////////////////////////

// a) da class Industry
// b) Client mesmo

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndutryNumber(): string{
        return this.industryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
} 