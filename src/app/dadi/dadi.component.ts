import { Component } from '@angular/core';

@Component({
  selector: 'app-dadi',
  templateUrl: './dadi.component.html',
  styleUrls: ['./dadi.component.css']
})
export class DadiComponent {
  dado1:number = 5;
  dado2:number = 5;

  pathDado1:string = "assets/img";
  pathDado2:string = "assets/img";

  pari:boolean = false; //per sapere se ho fatto pareggio

  constructor(){
    //i dadi vengo estratti al caricamento
    this.dado1 = Math.floor(Math.random()*6) +1;
    this.dado2 = Math.floor(Math.random()*6) +1;

    if(this.dado1 == this.dado2){
      this.pari = true;
    }

    //viusualizzo l'immagine corrispondendete al numero uscito
    this.pathDado1 += this.dado1.toString() + ".png";
    this.pathDado2 += this.dado2.toString() + ".png";
  }
  
}
