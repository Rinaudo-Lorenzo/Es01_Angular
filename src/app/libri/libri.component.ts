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

  visPage:boolean = false; //per visualizzare/nascondere una colonna

  constructor(){
    this.visPage = false;
  }
}
