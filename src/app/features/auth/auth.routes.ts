import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './layout/layout.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
