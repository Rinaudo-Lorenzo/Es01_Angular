import { Component } from '@angular/core';
//importo il file json con i libri
import { books } from 'src/assets/dati/books';


@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {
  libri:any = books;

  visPag:boolean = true; //per visualizzare/nascondere una colonna

  constructor(){
    this.visPag = false;
  }
}
