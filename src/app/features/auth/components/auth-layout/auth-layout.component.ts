import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LoginComponent } from '../login-form/login.component';
import { SignupComponent } from '../signup-form/signup.component';
import { FooterComponent } from '../../../../reusable-components/footer/footer.component';
import { ThemeService } from '../../../../services/theme.service';

@Component({
    selector: 'auth-layout',
    standalone: true,
    imports: [CommonModule, SignupComponent, LoginComponent, FooterComponent],
    templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
    constructor(private theme: ThemeService) {}

    @Input() formType: 'login' | 'signup' = 'login';
    @Output() formTypeChange = new EventEmitter<'login' | 'signup'>();
    @Output() loginSubmit = new EventEmitter<any>();
    @Output() signupSubmit = new EventEmitter<any>();

    currentTheme: 'light' | 'dark' = 'light';

    ngOnInit() {
        this.theme.getTheme().subscribe((theme) => {
            this.currentTheme = theme;
        });
    }

    toggleTheme() {
        this.theme.toggleTheme();
    }

    switchView(view: 'login' | 'signup') {
        this.formTypeChange.emit(view);
    }
}
