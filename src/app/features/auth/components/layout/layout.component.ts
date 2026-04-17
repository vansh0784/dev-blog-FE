import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginComponent } from '../login-form/login.component';
import { SignupComponent } from '../signup-form/signup.component';

@Component({
    selector: 'auth-layout',
    standalone: true,
    imports: [CommonModule, SignupComponent, LoginComponent],
    templateUrl: './layout.component.html',
})
export class AuthLayoutComponent {
    @Input() formType: 'login' | 'signup' = 'login';
    @Output() formTypeChange = new EventEmitter<'login' | 'signup'>();

    switchView(view: 'login' | 'signup') {
        this.formTypeChange.emit(view);
    }
}
