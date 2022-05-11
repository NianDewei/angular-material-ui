import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manager',
    loadChildren: () => import('./courses-manager/courses-manager.module').then(m => m.CoursesManagerModule)
  },{
    path: '**',
    redirectTo: 'manager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
