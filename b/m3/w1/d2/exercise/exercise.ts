class user {
    name:string;                                                    
    account:number;                                                     
    constructor(name:string, account:number){                       
        this.name = name;
        this.account = account;   
    }


    deposit(){
        let amount = (<HTMLInputElement>document.getElementById("money")).value
        this.account = this.account + amount
    }

    withdraw(){
        let amount = (<HTMLInputElement>document.getElementById("money")).value
        this.account = this.account - amount
    }
}



class Adult extends user {
    interest:number;
    constructor(name:string, account:number,interest:number){
        super(name, account);
        this.interest = interest
        
    } 

    interests(){
        let annualInterest = this.account * this.interest
    }
}

let Mother = new Adult ("Mother", 100000, 1.1)
let Son = new user ("Son", 1000)

(<HTMLInputElement>document.getElementById("deposit")).addEventListener("click", ()=>{
    let x = (<HTMLInputElement>document.getElementById("user")).value
    let y = (<HTMLInputElement>document.getElementById("money")).value
    if(x == "Mother"){
        Mother.deposit(y)
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Hai depositato ${this.y}. Il tuo saldo è di ${this.account}</h6>`
    }else if (x == "Son"){
        Son.deposit(y)
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Hai depositato ${this.y}. Il tuo saldo è di ${this.account}</h6>`
    }else{
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Credenziali errate o fondi insufficienti</h6>`

    }
})

(<HTMLInputElement>document.getElementById("withdraw")).addEventListener("click", ()=>{
    let x = (<HTMLInputElement>document.getElementById("user")).value
    let y = (<HTMLInputElement>document.getElementById("money")).value
    if(x == "Mother" && this.account >= x){
        Mother.withdraw(y)
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Hai prelevato ${this.y}. Il tuo saldo è di ${this.account}</h6>`
    }else if(x == "Mother" && this.account >= x){
        Son.deposit(y)
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Hai prelevato ${this.y}. Il tuo saldo è di ${this.account}</h6>`
    }else{
        (<HTMLInputElement>document.getElementById("bancomat-bottom")).innerHTML = `<h6>Credenziali errate o fondi insufficienti</h6>`
    }
})