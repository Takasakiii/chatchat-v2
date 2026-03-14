import { Component, inject, OnInit } from '@angular/core';
import { MediaChat } from '../../services/media-chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  private readonly mediaChat = inject(MediaChat);
  private readonly router = inject(Router);

  public async ngOnInit(): Promise<void> {
    if (!this.mediaChat.isInitialized) {
      await this.router.navigate(['/']);
      return;
    }

    await this.mediaChat.start();
  }

  public async startScreenShare(): Promise<void> {
    await this.mediaChat.startScreenShare();
  }
}
