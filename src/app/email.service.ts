import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  send({ name, email, msg }) {
    this.http
      .post('http://localhost:3000/email', { name, email, msg })
      .subscribe(
        () =>
          this.messageService.add('Email was successfully sent!', 'primary'),
        () =>
          this.messageService.add(
            'Unable to send email at this time. Please try again in a bit!',
            'danger'
          )
      );
  }
}
