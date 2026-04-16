import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../features/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private readonly authService: AuthService,
    ) {}

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) return true;
        this.router.navigate(['/sign-in']);
        return false;
    }
}
