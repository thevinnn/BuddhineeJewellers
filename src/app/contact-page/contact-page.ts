import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Title} from '../title/title';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Title],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.css'],
})
export class ContactPage {
  submitting = false;
  successMsg = '';
  errorMsg = '';

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  isInvalid(name: 'fullName' | 'email' | 'message'): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    this.successMsg = '';
    this.errorMsg = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    setTimeout(() => {
      this.submitting = false;
      this.successMsg = 'Thanks! Your message has been sent.';
      this.form.reset();
    }, 700);
  }
}
