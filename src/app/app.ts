import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('Dev-Blog');
    protected readonly author = signal('Vansh Singh');

    onClickingOfButton() {
        if (this.author() === 'Vansh Singh') return this.author.set('Hello World');
        return this.author.set('Vansh Singh');
    }
}
