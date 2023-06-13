import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "register",
        loadComponent: () => import("./features/auth/pages/register/register.component").then(c => c.RegisterComponent) 
    },
    {
        path: 'home',
        loadComponent: () => import("./features/home/pages/home-page/home-page.component").then(c => c.HomePageComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: "home"
    }
];
