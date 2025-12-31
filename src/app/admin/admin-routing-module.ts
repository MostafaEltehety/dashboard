import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { childRoutes } from './child-routes';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
