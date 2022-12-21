// interface dunque definisce types personalizzati in typescript
// interface è una sorta di vincolo ( definisce la modalità con cui un oggetto può interagire con un altro oggetto )

// interface quindi definisce le proprietà che una classe deve avere, così che gli oggetti che devono interagire sappiano con che proprietà/metodi chiamare

// 1) definiamo ad esempio un'interfaccia 

interface IPersona{
    nome:string;
    cognome:string;
    visualizzaNomeCognome(): string;
}

// 2) di conseguenza, una classe che volesse interagire con tale interfaccia, dovrà aderire al "contratto" e cioè avere nome, cognome, visualizzaNomeCognome
// 3) Ovviamente, queste proprietà e metodi devono essere stringhe

class Persona implements IPersona {             // la keyword da usare è "Implements" - La classe Persona dichiara di implementare l'interfaccia IPersona ( tramite implements )
    nome: string;
    cognome:string;
    constructor(nome:string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;

    }
    visualizzaNomeCognome(): string {
        return this.nome + " " + this.cognome;
    }
}

// 4) in questo caso ha le medesime proprietà e metodi di IPersona, ma possiamo aggiungere proprietà non previste dall'interfaccia.

enum Materie {Storia, Informatica, Matematica, Html, Css, Javascript};

class Studente implements IPersona{
    nome: string;
    cognome:string;
    materie: Materie[]                                      //5) implemento materie al
    constructor(nome:string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];

    }
    visualizzaNomeCognome(): string {
        return this.nome + " " + this.cognome + " " +  this.materie;
    }

}