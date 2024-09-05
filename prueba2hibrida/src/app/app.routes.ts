import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./Paginas/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
  {
    path: 'gestion-de-citas',
    loadComponent: () => import('./Paginas/gestion-de-citas/gestion-de-citas.page').then( m => m.GestionDeCitasPage)
  },
];
