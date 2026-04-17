import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    articles$!: Observable<any>;
    constructor(
        private readonly homeService: HomeService,
        private readonly auth: AuthService,
    ) {}
    ngOnInit(): void {
        this.articles$ = this.homeService.getHomeArticles(5);
    }

    onLogout() {
        this.auth.Logout();
    }
}
