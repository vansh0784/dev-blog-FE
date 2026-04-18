import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TokenService } from '../../core/services/token.service';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [NgClass, AsyncPipe, CommonModule, RouterLink],
})
export class HeaderComponent {
    private tokenService = inject(TokenService);
    private themeService = inject(ThemeService);
    theme$ = this.themeService.getTheme();
    app_name: string = '< Dev-Blog />';
    isLoggedIn = this.tokenService.getAccessToken();

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
