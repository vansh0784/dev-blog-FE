import { Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guards';
import { GuestGuard } from './core/guards/guest.guard';
import { HomeComponent } from './features/home/home.component';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth.page.component';
import { AuthGuard } from './core/guards/auth.guards';
import { PrivacyPolicyComponent } from './footer-pages/privacy.component';
import { TermsAndConditionComponent } from './footer-pages/terms.condition.component';
import { SecurityComponent } from './footer-pages/security';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },

    {
        path: 'auth',
        component: AuthPageComponent,
        canActivate: [GuestGuard],
    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
    },
    {
        path: 'terms-and-conditions',
        component: TermsAndConditionComponent,
    },
    {
        path: 'security',
        component: SecurityComponent,
    },

    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     canActivate: [AuthGuard],
    //   },

    //   {
    //     path: '**',
    //     redirectTo: 'home',
    //   },
];
