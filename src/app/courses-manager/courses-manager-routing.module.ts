import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';

import { CoursesManagerComponent } from './courses-manager.component';

const routes: Routes =[
  {
    path: '',
    component: CoursesManagerComponent,
    children: [
      {
        path: '',
        component: ListCourseComponent
      },
      {
        path: 'add',
        component: AddCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagerRoutingModule { }
