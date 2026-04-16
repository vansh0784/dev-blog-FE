import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    articles$!: Observable<any>;
    constructor(private readonly homeService: HomeService) {}
    ngOnInit(): void {
        this.articles$ = this.homeService.getHomeArticles(5);
    }
}
