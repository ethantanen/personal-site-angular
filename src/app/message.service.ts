import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages = [];

  constructor() {}

  add(msg, type) {
    const id = uuid();
    this.messages.push({ msg, id, type });

    setTimeout(() => {
      this.messages = this.messages.filter((msg) => msg.id !== id);
    }, 6000);
  }

  poll() {
    return new Observable<Array<string>>((observer) => {
      setInterval(() => observer.next(this.messages), 1000);
    });
  }
}
