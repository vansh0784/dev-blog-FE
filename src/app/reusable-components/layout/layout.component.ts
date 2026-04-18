import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    standalone: true,
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    imports: [HeaderComponent, FooterComponent, RouterOutlet, SidebarComponent],
})
export class LayoutComponent {}
