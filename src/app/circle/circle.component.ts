import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

const MAX_RADIUS = 150;
const MAX_COLOR = 16777215;

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent {
  style: {
    width: string;
    height: string;
    'background-color': string;
    'border-radius': string;
    left: string;
    top: string;
    position: string;
  };

  constructor() {
    const color = Math.floor(Math.random() * MAX_COLOR).toString(16);
    const radius = Math.random() * MAX_RADIUS;
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    this.style = {
      width: `${radius}px`,
      height: `${radius}px`,
      'background-color': `#${color}`,
      'border-radius': '50%',
      left: `${x}px`,
      top: `${y}px`,
      position: 'absolute',
    };
  }
}
