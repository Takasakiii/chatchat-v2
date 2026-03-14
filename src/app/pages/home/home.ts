import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MediaChat } from '../../services/media-chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly formBuilder = inject(FormBuilder);
  private readonly mediaChat = inject(MediaChat);
  private readonly router = inject(Router);

  protected readonly form = this.formBuilder.group({
    nick: ['', Validators.required],
    room: ['', Validators.required],
  });

  protected async handleFormSubmit(): Promise<void> {
    if (!this.form.valid) {
      alert('Preencha os valores de Nick e Room');
    }

    this.mediaChat.init({
      nick: this.form.value.nick!,
      room: this.form.value.room!,
    });

    await this.router.navigate(['/chat']);
  }
}
