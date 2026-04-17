import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private readonly authService: AuthService,
    ) {}

    canActivate(): boolean {
        console.log('debug', this.authService.isAuthenticated());
        if (this.authService.isAuthenticated()) return true;
        this.router.navigate(['/sign-in']);
        return false;
    }
}
