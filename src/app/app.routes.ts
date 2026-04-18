import { Routes } from '@angular/router';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthGuard } from './core/guards/auth.guards';
import { HomeComponent } from './features/home/home.component';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth.page.component';
import { PrivacyPolicyComponent } from './footer-pages/privacy.component';
import { TermsAndConditionComponent } from './footer-pages/terms.condition.component';
import { SecurityComponent } from './footer-pages/security.component';
import { OverviewComponent } from './features/overview/overview.component';
import { LayoutComponent } from './reusable-components/layout/layout.component';
// import { SecurityComponent } from './footer-pages/security.component';
// import { ArticlesListComponent } from './features/articles/articles-list.component';
// import { ArticleDetailComponent } from './features/articles/article-detail.component';
// import { ProfileComponent } from './features/profile/profile.component';
// import { ProfileSettingsComponent } from './features/profile/profile-settings.component';
// import { ChangePasswordComponent } from './features/profile/change-password.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPageComponent,
        canActivate: [GuestGuard],
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: OverviewComponent,
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
        ],
    },

    // {
    //     path: 'articles',
    //     canActivate: [AuthGuard],
    //     children: [
    //         {
    //             path: '',
    //             component: ArticlesListComponent, // /articles
    //         },
    //         {
    //             path: ':slug',
    //             component: ArticleDetailComponent, // /articles/my-blog-post
    //         },
    //     ],
    // },
    // {
    //     path: 'profile',
    //     canActivate: [AuthGuard],
    //     children: [
    //         {
    //             path: '',
    //             component: ProfileComponent, // /profile
    //         },
    //         {
    //             path: 'settings',
    //             component: ProfileSettingsComponent, // /profile/settings
    //         },
    //         {
    //             path: 'password',
    //             component: ChangePasswordComponent, // /profile/password
    //         },
    //     ],
    // },
];
