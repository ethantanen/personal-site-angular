import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../app.component.scss'],
})
export class AboutMeComponent implements OnInit {
  stacks = [
    { framework: 'Angular.js', backend: 'Node.js', host: 'Heroku' },
    { frontend: 'React.js', backend: 'Node.js', host: 'EC2' },
    { frontend: 'EJS', backend: 'Node.js', host: 'Heroku' },
    { framework: 'Django', host: 'Heroku' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
