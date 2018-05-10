import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  public rating = 0;

  public stars: boolean[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
