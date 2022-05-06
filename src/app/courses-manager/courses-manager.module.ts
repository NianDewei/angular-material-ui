import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';


@NgModule({
  declarations: [
    CoursesManagerComponent
  ],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule
  ]
})
export class CoursesManagerModule { }
