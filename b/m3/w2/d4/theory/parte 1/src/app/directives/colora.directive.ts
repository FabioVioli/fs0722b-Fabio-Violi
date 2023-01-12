import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';  //1) ElementRef è un wrapper che intercetta un elemento nativo alla vista.
                                                                                          //2) HostListener ascolta quale elemento del dom sta chiamando e poi, tramite HostBinding, fa il collegamento dei metadati.
                                                                                          //3) Attraverso input manderemo le direttive che stanno in questo file

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  @Input() defaultColor: string = "red";          // Riceviamo inizialmente un "default color" di tipo string, a cui daremo inizialmente il valore rosso.
  @Input("appColora") newColor: string = "black"  // Quando applichiamo l'intera direttiva ci dovrà arrivare un new color. Se non arriva, di default sarà black.

  @HostBinding("style.color") color:string = "black";
  @HostBinding("class.active") active:boolean = false;

  @HostListener("mouseenter") mouseEnter(){
    this.color = this.newColor;
    this.active = true;
  }

  @HostListener("mouseleave") mouseLeave(){
    this.color = this.defaultColor;
    this.active = false;
  }
  constructor(private ref: ElementRef) {}

  ngOnInit(): void{
    console.log(this.ref);
    this.color = this.defaultColor
  }

}
