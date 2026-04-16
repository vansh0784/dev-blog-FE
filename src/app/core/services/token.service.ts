import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    getAccessToken(): string | null {
        return localStorage.getItem('token');
    }

    decodeAccessToken(): any | null {
        const token = this.getAccessToken();
        if (!token) return null;

        try {
            const payload = token.split('.')[1];
            return JSON.parse(atob(payload));
        } catch {
            return null;
        }
    }

    isTokenExpired(): boolean {
        const decoded = this.decodeAccessToken();
        if (!decoded?.exp) return true;
        const now = Math.floor(Date.now() / 1000);
        return decoded.exp < now;
    }

    clearToken(): void {
        localStorage.removeItem('accessToken');
    }

    setAccessToken(token: string): void {
        localStorage.setItem('accessToken', token);
    }
}
