import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

//El archivo app.routes.ts es el encargado de definir las rutas de la aplicación. Es el que utilizo para navegar entre las paginas que hice.

export const routes: Routes = [

    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
    },

];
    