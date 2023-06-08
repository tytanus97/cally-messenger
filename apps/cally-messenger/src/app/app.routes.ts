import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "register",
        loadComponent: () => import("./features/auth/pages/register/register.component").then(c => c.RegisterComponent) 
    }
];
