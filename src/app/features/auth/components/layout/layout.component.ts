import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'auth-layout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './layout.component.html',
})
export class AuthLayoutComponent {
    formType = signal<'Login' | 'Signup'>('Login');
}
