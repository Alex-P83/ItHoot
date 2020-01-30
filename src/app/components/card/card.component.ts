import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardInfo = {
      title:'Hr',
      img:'https://cdn.auth0.com/blog/angular5/logo.png'
    };
  @Input() card: Card 

  constructor() { }

  ngOnInit() {
  }

}
