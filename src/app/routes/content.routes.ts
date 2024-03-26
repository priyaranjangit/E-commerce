import { Routes } from '@angular/router';

export const contentRoutes: Routes = [
    // { path: 'dashboard', loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule) },
    //  {path:'',loadChildren:()=>import('../authentication/authentication.module').then(m=>m.AuthenticationModule)},
     
    {path:'',loadChildren:()=>import('../shop/shop.module').then(m=>m.ShopModule)},
    // {path:'wishlist',loadChildren:()=>import('../authentication/authentication.module').then(m=>m.AuthenticationModule)},
    // {path:'checkout',loadChildren:()=>import('../authentication/authentication.module').then(m=>m.AuthenticationModule)},
    // {path:'signup',loadChildren:()=>import('../authentication/authentication.module').then(m=>m.AuthenticationModule)},
   
];
