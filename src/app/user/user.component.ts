
import { Component, Input } from '@angular/core';
import { User } from '../store/user';

@Component({
    selector: 'app-user',
    standalone: true,
    template: `
      @for (user of users; track user.id) {
        <div class="user-card">
            <h2>{{ user.id }}</h2>
            <p>{{ user.name }}</p>
        </div>
      }
    `,
    styles: [`
      .user-card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    `]
  })
  export class UserComponent {
    @Input() users!: User[];
  }