import { Routes } from '@angular/router';

export const routes: Routes = [

    {
      path: 'home',
      title: 'Integrity Solutions',
      data: {
        navName: 'Home',
        type: 1
      },
      loadComponent: () => import('./pages/home/home.component'),
    },
    {
      path: 'services',
      title: 'Services',
      data: {
        navName: 'Services',
        type: 3
      },
      // redirectTo: 'services/software-factory',
      loadComponent: () => import('./pages/services/services.component'),
      children: [
        {
          path: 'software-factory',
          title: 'Software Factory',
          data: {
            navName: 'Software Factory',
            type: 0
          },
          loadComponent: () => import('./pages/services/software-factory/software-factory.component')
        }
      ]
    },
    {
      path: 'about-us',
      title: 'About us',
      data: {
        navName: 'About us',
        type: 1
      },
      loadComponent: () => import('./pages/about-us/about-us.component'),
    },
    {
      path: 'contact-us',
      title: 'Contact us',
      data: {
        navName: 'Contact us',
        type: 1
      },
      loadComponent: () => import('./pages/contact-us/contact-us.component'),
    },

    {
      path: '',
      title: 'Integrity Solutions',
      loadComponent: () => import('./pages/home/home.component'),
      pathMatch: 'full'
    },
    {
      path: '**',
      loadComponent: () => import('./shared/404-page/404-page.component'),
      pathMatch: 'full'
    },
    // {
    //   path: '/*',
    //   redirectTo: '/home',
    // }


];
