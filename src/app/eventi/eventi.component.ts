import { Component } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent {
  BtnClick(){
    window.alert("Salve Mondo!");
  }
}

