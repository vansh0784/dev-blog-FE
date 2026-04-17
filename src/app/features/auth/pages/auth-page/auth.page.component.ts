import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { AuthLayoutComponent } from '../../components/layout/layout.component';
import { ILoginInput, ISignupInput } from '../../models/auth.input.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
    standalone: true,
    selector: 'app-auth',
    imports: [AuthLayoutComponent],
    templateUrl: './auth.page.component.html',
})
export class AuthPageComponent {
    title = 'Auth';
    formType = signal<'login' | 'signup'>('login');
    constructor(private authService: AuthService) {}

    switchView(view: 'login' | 'signup') {
        this.formType.set(view);
    }

    onLogin(data: ILoginInput) {
        this.authService.Login(data).subscribe({
            next: (res) => console.log(res),
            error: (res) => console.log(res),
        });
    }
    onSignup(data: ISignupInput) {
        this.authService.Signup(data).subscribe({
            next: (res) => console.log(res),
            error: (res) => console.log(res),
        });
    }
}
