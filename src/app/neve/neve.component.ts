import { Component } from '@angular/core';

@Component({
  selector: 'app-neve',
  templateUrl: './neve.component.html',
  styleUrls: ['./neve.component.css']
})
export class NeveComponent {
  dati = [
    {nome: "Artesina", altezza: "101"},
    {nome: "Limone", altezza: "77"},
    {nome: "Argentera", altezza: "125"},
  ];

  constructor(){
    for(let i=0; i<this.dati.length; i++){
      //genera i valori casuali dell'altezza
      this.dati[i].altezza = (Math.floor(Math.random()*210)/100).toString();
    }
  }
}
