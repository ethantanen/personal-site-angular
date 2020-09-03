import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss'],
})
export class EmailMeComponent {
  email: { name: string; msg: string; email: string; honeypot: string } = {
    name: '',
    msg: '',
    email: '',
    honeypot: '',
  };

  constructor(private emailService: EmailService) {}

  sendEmail(form) {
    if (!this.email.honeypot) {
      this.emailService.send(this.email);
    }
    form.reset();
  }
}
