import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService,
        private router: Router,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const token = this.tokenService.getAccessToken();
        let authReq = req;
        if (token) {
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(authReq).pipe(
            catchError((error) => {
                if (error.status === 401) {
                    this.tokenService.clearToken();
                    this.router.navigate(['/auth/login']);
                }

                return throwError(() => error);
            }),
        );
    }
}
