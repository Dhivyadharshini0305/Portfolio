import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from './environment';

export interface ContactMessage {
  from_name: string;
  from_email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {}

  async sendMessage(name: string, email: string, message: string): Promise<any> {
    const templateParams: Record<string, string> = {
      from_name: name,
      from_email: email,
      message: message
    };

    return emailjs.send(
      environment.EMAILJS_SERVICE_ID,
      environment.EMAILJS_TEMPLATE_ID,
      templateParams,
      environment.EMAILJS_PUBLIC_KEY
    );
  }
}
