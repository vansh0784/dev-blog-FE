import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private theme$ = new BehaviorSubject<'light' | 'dark'>('light');

    constructor() {
        this.loadTheme();
    }

    toggleTheme() {
        const newTheme = this.theme$.value === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setTheme(theme: 'light' | 'dark') {
        this.theme$.next(theme);
        localStorage.setItem('theme', theme);

        const html = document.documentElement;

        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }

    getTheme() {
        return this.theme$.asObservable();
    }

    private loadTheme() {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.setTheme(theme);
    }
}
