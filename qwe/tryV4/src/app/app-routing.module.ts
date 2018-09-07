import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'route', loadChildren: './route/route.module#RoutePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
