import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

import { environment } from '../environments/environment';

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
      .post(environment.EMAIL_URL, {
        name,
        email,
        msg,
      })
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
