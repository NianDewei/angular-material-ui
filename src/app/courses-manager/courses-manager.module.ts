import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CardsComponent } from './components/list-course/cards/cards.component';
import { ListComponent } from './components/list-course/list/list.component';
import { TreeComponent } from './components/list-course/tree/tree.component';
import { ExpansionComponent } from './components/list-course/expansion/expansion.component';
import { TableComponent } from './components/list-course/table/table.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';



@NgModule({
  // entryComponents: [EditCourseComponent],
  declarations: [
    CoursesManagerComponent,
    SidenavComponent,
    ToolbarComponent,
    AddCourseComponent,
    ListCourseComponent,
    CardsComponent,
    ListComponent,
    TreeComponent,
    ExpansionComponent,
    TableComponent,
    EditCourseComponent

  ],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class CoursesManagerModule { }
