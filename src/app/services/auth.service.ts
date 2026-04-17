import { Injectable } from '@angular/core';
import { TokenService } from '../core/services/token.service';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../features/auth/graphql/auth.mutation';
import { map, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

export interface SignInInput {
    email: string;
    password: string;
}

export interface ISignupInput {
    userName: string;
    password: string;
    email: string;
}

export interface AuthResponse {
    token: string;
    user: IUserType;
}

export interface IUserType {
    id: string;
    email: string;
    userName: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private readonly tokenService: TokenService,
        private readonly apollo: Apollo,
        private readonly router: Router,
    ) {}

    isAuthenticated(): boolean {
        return !this.tokenService.isTokenExpired();
    }

    Login(input: SignInInput) {
        return this.apollo.mutate<{ login: AuthResponse }>({ mutation: LOGIN_MUTATION, variables: { input } }).pipe(
            map((res) => res.data!.login),
            tap((res) => {
                this.tokenService.setAccessToken(res.token);
                this.router.navigate(['/home']);
            }),
        );
    }

    Signup(input: ISignupInput) {
        return this.apollo.mutate<{ signup: AuthResponse }>({ mutation: SIGNUP_MUTATION, variables: { input } }).pipe(
            map((res) => res.data!.signup),
            tap((res) => {
                this.tokenService.setAccessToken(res.token);
            }),
        );
    }

    Logout() {
        this.tokenService.clearToken();
        this.router.navigate(['/auth']);
    }
}
