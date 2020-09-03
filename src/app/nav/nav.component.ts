import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links = [
    { path: '/home', name: 'Home' },
    { path: '/about-me', name: 'About' },
    { path: '/resume', name: 'Resume' },
    { path: '/email-me', name: 'Email Me' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
