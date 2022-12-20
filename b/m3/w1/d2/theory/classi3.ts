// override -> la classe figlia ridefinisce il metodo della superclasse

class PrinterrClass{
    doPrint():void{
        console.log("doPrint() from Parent called ...")
    }
}

class StringPrinter extends PrinterrClass{
    doPrint(): void {                           // doPrint   
        super.doPrint()                         // viene ridefinito tramite super
        console.log("doPrint() is printing a string...")
    }
}

let prova = new StringPrinter()
prova.doPrint()