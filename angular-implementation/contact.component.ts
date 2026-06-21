import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status = 'sending';
    const { name, email, message } = this.contactForm.value;

    try {
      await this.contactService.sendMessage(name, email, message);
      this.status = 'success';
      this.contactForm.reset();
      
      setTimeout(() => {
        this.status = 'idle';
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.status = 'error';
      
      setTimeout(() => {
        this.status = 'idle';
      }, 5000);
    }
  }

  // Helper getters for validation errors in template
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
