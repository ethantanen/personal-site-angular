import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css'],
})
export class CirclesComponent implements OnInit {
  circleCount = Array(15);
  constructor() {}

  ngOnInit(): void {}
}
