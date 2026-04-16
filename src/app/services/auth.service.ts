import { Injectable } from '@angular/core';
import { TokenService } from '../core/services/token.service';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../features/auth/graphql/auth.mutation';
import { map, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';

interface ILoginInput {
    email: string;
    password: string;
}

interface ISignupInput {
    userName: string;
    password: string;
    email: string;
}

interface AuthResponse {
    token: string;
    user: IUserType;
}

interface IUserType {
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
    ) {}

    isAuthenticated(): boolean {
        return !this.tokenService.isTokenExpired();
    }

    Login(input: ILoginInput) {
        return this.apollo.mutate<{ login: AuthResponse }>({ mutation: LOGIN_MUTATION, variables: { input } }).pipe(
            map((res) => res.data!.login),
            tap((res) => {
                this.tokenService.setAccessToken(res.token);
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
}
