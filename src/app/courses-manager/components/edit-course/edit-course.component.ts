import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../../models/category';
import { Course } from '../../models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.sass'],
})
export class EditCourseComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'Angular',
      checked: false,
    },
    {
      name: 'Web',
      checked: false,
    },
    {
      name: 'Mobile',
      checked: false,
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ) {
    // date in ISO format
    course.startDate = new Date(course.startDate ? course.startDate:"").toISOString();
  }

  ngOnInit(): void {}

  update() {
    this.dialogRef.close(this.course);
  }

  cancel(){
    this.dialogRef.close();
  }
}
