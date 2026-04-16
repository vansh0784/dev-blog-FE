import { Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guards';
import { GuestGuard } from './core/guards/guest.guard';
import { HomeComponent } from './features/home/home.component';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth.page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
