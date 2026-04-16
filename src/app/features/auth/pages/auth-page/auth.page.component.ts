import { Component, signal } from '@angular/core';
import { AuthLayoutComponent } from '../../components/layout/layout.component';

@Component({
    standalone: true,
    selector: 'app-auth',
    imports: [AuthLayoutComponent],
    templateUrl: './auth.page.component.html',
})
export class AuthPageComponent {
    title = 'Auth';
    formType = signal<'Login' | 'Signup'>('Login');
}
