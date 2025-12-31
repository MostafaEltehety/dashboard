import { Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { childRoutes } from './admin/child-routes';

export const routes: Routes = [
  {
      path:'',
      component:Layout,
      children:[
        {path:'',
          redirectTo:'dashboard',pathMatch:'full'
        },
        ...childRoutes
      ]
    }
];
