import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/courses-manager/models/course';
import { CourseService } from 'src/app/courses-manager/services/course.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../../edit-course/edit-course.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'specialty',
    'actions',
  ];
  dataSource = new MatTableDataSource<Course>();

  // initialize paginator
  @ViewChild(MatPaginator, { static: true })
  paginator: any;

  constructor(
    private courseService: CourseService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.courseService
      .getCourses()
      .then((courses) => (this.dataSource.data = courses));
  }

  applyFilter(filterValue: KeyboardEvent): void {
    this.dataSource.filter = (filterValue.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }

  edit(course: Course): void {
    this.openDialog(course);
  }

  openDialog(course: Course): void {
    const options = {
      width: '500px',
      data: course,
    };

    const dialogRef = this.dialog.open(EditCourseComponent, options);
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        console.log('The dialog was closed');
        return;
      }
      course = result;
      this.snackBar.open('Course updated', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
      });
    });
  }
}
