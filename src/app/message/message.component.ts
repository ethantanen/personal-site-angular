import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  messages = [];

  constructor(msgService: MessageService) {
    msgService.poll().subscribe((msgs) => {
      this.messages = msgs;
    });
  }

  ngOnInit(): void {}
}
