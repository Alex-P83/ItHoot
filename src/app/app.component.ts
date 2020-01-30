import { Component } from '@angular/core';

export interface Card {
  title: string,
  img:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  cardDate: Card[] = [
    {
      title:'HR',
      img:'../../images/hr.png'
    }
  ]  
}
