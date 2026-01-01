import { Routes } from "@angular/router";

export const childRoutes:Routes = [
  { path: 'dashboard', data: { icon: 'dashboard', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'tables', data: { icon: 'table_chart',text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'charts', data: { icon: 'bar_chart', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'slider', data: { icon: 'slideshow', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'list', data: { icon: 'list',text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'mat-components', data: { icon: 'code', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'forms', data: { icon: 'assignment', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'animations', data: { icon: 'perm_media', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'typography', data: { icon: 'font_download', text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'google-maps', data: { icon: 'place',text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)},
   { path: 'mat-grid', data: { icon: 'grid_on',text: 'Dashboard' } ,loadComponent:()=>import('./layout/layout').then(m=>m.Layout)}
]
